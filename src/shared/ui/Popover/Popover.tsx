import { useRef, type ReactNode } from 'react'
import type { Placement, Offset, Trigger, Delay } from './types'
import { usePopover } from './usePopover'
import { PopoverContext, type PopoverContextType } from './Context'
import { PopoverTrigger } from './Trigger'
import { PopoverContent } from './Content'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'
import { useKeyPress } from 'shared/lib/hooks/useKeyPress'

export interface PopoverProps {
  placement: Placement
  offset?: Offset
  delay?: Delay
  visible?: boolean
  triggerType?: Trigger
  children: ReactNode
}

const DEFAULT_OFFSET: Offset = {
  side: 10,
  align: 10,
}

const DEFAULT_DELAY: Delay = {
  enter: 0,
  leave: 200,
}

export const PopoverRoot = (props: PopoverProps) => {
  const {
    placement,
    offset = DEFAULT_OFFSET,
    delay = DEFAULT_DELAY,
    visible = false,
    triggerType = 'click',
    children,
  } = props

  const defaultRef = useRef<any>(null)

  const arrowRef = useRef<any>(null)

  const {
    isOpened,
    changeOpened,
    referenceRef,
    floatingRef,
    popoverStyles,
    arrowStyles,
  } = usePopover({
    placement,
    offset,
    visible,
    arrow: arrowRef,
    arrowPadding: 0,
  })

  const composedRef = useComposedRefs(defaultRef, referenceRef)

  const changePopover = (value: boolean) => {
    changeOpened(value)
  }

  useClickOutside(defaultRef, () => changePopover(false))

  useKeyPress(['Escape'], () => changePopover(false))

  const context: PopoverContextType = {
    referenceRef: composedRef,
    floatingRef: floatingRef,
    arrowRef: arrowRef,
    isOpened: isOpened,
    popoverStyles: popoverStyles,
    arrowStyles: arrowStyles,
    triggerType: triggerType,
    togglePopover: changePopover,
  }

  return (
    <div className="mt-6">
      <PopoverContext.Provider value={context}>
        {children}
      </PopoverContext.Provider>
    </div>
  )
}

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Content: PopoverContent,
})
