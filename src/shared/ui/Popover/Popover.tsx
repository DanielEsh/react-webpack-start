import { useRef, type ReactNode } from 'react'
import type { Placement, Offset, Trigger } from './types'
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
  visible?: boolean
  triggerType?: Trigger
  children: ReactNode
}

const DEFAULT_OFFSET: Offset = {
  side: 10,
  align: 10,
}

export const PopoverRoot = (props: PopoverProps) => {
  const {
    placement,
    offset = DEFAULT_OFFSET,
    visible = false,
    triggerType = 'click',
    children,
  } = props

  const { isOpened, changeOpened, referenceRef, floatingRef, popoverStyles } =
    usePopover({
      placement,
      offset,
      visible,
    })

  const defaultRef = useRef<any>(null)
  const composedRef = useComposedRefs(defaultRef, referenceRef)

  const changePopover = (value: boolean) => {
    changeOpened(value)
  }

  useClickOutside(defaultRef, () => changePopover(false))

  useKeyPress(['Escape'], () => changePopover(false))

  const context: PopoverContextType = {
    referenceRef: composedRef,
    floatingRef: floatingRef,
    isOpened: isOpened,
    popoverStyles: popoverStyles,
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
