import { createContext } from 'react'

export interface ToastContextType {
  viewport?: any
}

const COMPONENT_NAME = 'ToastContext'

export const ToastContext = createContext<ToastContextType>({})

ToastContext.displayName = COMPONENT_NAME
