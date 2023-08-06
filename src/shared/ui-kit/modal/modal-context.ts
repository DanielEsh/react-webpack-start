import { createContext, PropsWithChildren } from 'react'

export interface ModalContextValues {
  onClose: () => void
}

const COMPONENT_NAME = 'ModalContext'

export const ModalContext = createContext<ModalContextValues>({
  onClose: () => {
    throw new Error('not implemented')
  },
})

ModalContext.displayName = COMPONENT_NAME

