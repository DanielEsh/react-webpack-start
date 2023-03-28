import { createContext, type CSSProperties } from 'react'
import { Trigger } from './types'
import { DEFAULT_TRIGGER_TYPE } from './constants'

export interface PopoverContextType {
  referenceRef?: any
  floatingRef?: any
  arrowRef?: any

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
