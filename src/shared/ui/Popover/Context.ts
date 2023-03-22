import { createContext, type CSSProperties } from 'react'
import { Trigger } from './types'

export interface PopoverContextType {
  referenceRef?: any
  floatingRef?: any
  popoverStyles: CSSProperties
  triggerType: Trigger
  isOpened: boolean
  togglePopover: (value: boolean) => void
}

const COMPONENT_NAME = 'PopoverContext'

export const PopoverContext = createContext<PopoverContextType>({
  popoverStyles: {},
  triggerType: 'click',
  isOpened: false,
  togglePopover: (value: boolean) => value,
})

PopoverContext.displayName = COMPONENT_NAME
