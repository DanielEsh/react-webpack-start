import { MutableRefObject, useRef, type ReactNode } from 'react'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'
import { useKeyPress } from 'shared/lib/hooks/useKeyPress'
import type { Placement, Offset, Trigger, Delay } from './types'
import { usePopover } from './usePopover'
import { PopoverContext, type PopoverContextType } from './Context'
import { PopoverTrigger } from './Trigger'
import { PopoverFloating } from './Floating'
import {
  DEFAULT_OFFSET,
  DEFAULT_DELAY,
  DEFAULT_TRIGGER_TYPE,
} from './constants'

export interface PopoverProps {
  value: boolean
  placement: Placement
  offset?: Offset
  delay?: Delay
  triggerType?: Trigger
  portalNode?: HTMLElement | null
  children: ReactNode
  onChange(visible: boolean): void
}

const PopoverRoot = (props: PopoverProps) => {
  const {
    value = false,
    placement,
    offset = DEFAULT_OFFSET,
    delay = DEFAULT_DELAY,
    portalNode,
    triggerType = DEFAULT_TRIGGER_TYPE,
    children,
  } = props

  const defaultRef = useRef<HTMLElement>(null)

  const arrowRef = useRef<HTMLSpanElement>(null)

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
    visible: value,
    arrow: arrowRef,
    arrowPadding: 0,
  })

  const composedRef = useComposedRefs(defaultRef, referenceRef)

  const timeoutDelayRef = useRef() as MutableRefObject<
    ReturnType<typeof setTimeout>
  >

  const changeVisible = (visible: boolean) => {
    changeOpened(visible)
    if (props.onChange) {
      props.onChange(visible)
    }
  }

  const delayClose = () => {
    timeoutDelayRef.current = setTimeout(() => {
      changeVisible(false)
    }, delay.leave)
  }

  const clearCloseTimeout = () => {
    clearTimeout(timeoutDelayRef.current)
  }

  const delayOpen = () => {
    setTimeout(() => {
      changeVisible(true)
    }, delay.enter)
  }

  const changePopover = (value: boolean) => {
    if (!value) {
      return delayClose()
    }
    return delayOpen()
  }

  useKeyPress(['Escape'], () => changePopover(false))

  const context: PopoverContextType = {
    referenceRef: composedRef,
    floatingRef: floatingRef,
    arrowRef: arrowRef,

    popoverStyles: popoverStyles,
    arrowStyles: arrowStyles,

    isOpened: isOpened,
    togglePopover: changePopover,
    clearCloseTimeout: clearCloseTimeout,

    triggerType: triggerType,
    portalNode: portalNode,
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
