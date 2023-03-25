import { useRef, type ReactNode } from 'react'
import type { Placement, Offset, Trigger, Delay } from './types'
import { usePopover } from './usePopover'
import { PopoverContext, type PopoverContextType } from './Context'
import { PopoverTrigger } from './Trigger'
import { PopoverFloating } from './Floating'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'
import { useKeyPress } from 'shared/lib/hooks/useKeyPress'

export interface PopoverProps {
  placement: Placement
  offset?: Offset
  delay?: Delay
  visible?: boolean
  triggerType?: Trigger
  portalNode?: HTMLElement | null
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
    portalNode,
    triggerType = 'click',
    children,
  } = props

  const defaultRef = useRef<any>(null)

  const arrowRef = useRef<any>(null)

  const timeoutDelayRef = useRef<any>(null)

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
    if (!value) {
      timeoutDelayRef.current = setTimeout(() => {
        changeOpened(value)
      }, delay.leave)
    } else {
      setTimeout(() => {
        changeOpened(value)
      }, delay.enter)
    }
  }

  const handleFloatingEnter = () => {
    clearTimeout(timeoutDelayRef.current)
  }

  const handleFloatingLeave = () => {
    changePopover(false)
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
    portalNode: portalNode,
    togglePopover: changePopover,
    onFloatingEnter: handleFloatingEnter,
    onFloatingLeave: handleFloatingLeave,
  }

  return (
    <PopoverContext.Provider value={context}>
      {children}
    </PopoverContext.Provider>
  )
}

export const Popover = Object.assign(PopoverRoot, {
  Trigger: PopoverTrigger,
  Floating: PopoverFloating,
})
