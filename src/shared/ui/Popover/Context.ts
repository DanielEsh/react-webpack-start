import { createContext, type CSSProperties, type MutableRefObject } from 'react'
import { Trigger } from './types'
import { DEFAULT_TRIGGER_TYPE } from './constants'

export interface PopoverContextType {
  referenceRef?: (node: Element) => void
  floatingRef?: (node: HTMLElement | null) => void
  arrowRef?: MutableRefObject<HTMLSpanElement | null>

  popoverStyles: CSSProperties
  arrowStyles: CSSProperties

  isOpened: boolean
  togglePopover: (value: boolean) => void
  clearCloseTimeout: () => void

  portalNode?: HTMLElement | null
  triggerType: Trigger
}

const COMPONENT_NAME = 'PopoverContext'

export const PopoverContext = createContext<PopoverContextType>({
  popoverStyles: {},
  arrowStyles: {},

  isOpened: false,
  togglePopover: (value: boolean) => value,
  clearCloseTimeout: () => null,

  triggerType: DEFAULT_TRIGGER_TYPE,
})

PopoverContext.displayName = COMPONENT_NAME
