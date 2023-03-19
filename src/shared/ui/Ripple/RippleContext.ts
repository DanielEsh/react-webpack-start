import { createContext, MutableRefObject } from 'react'

export interface RippleContextType {
  color: string
  containerRef: MutableRefObject<HTMLElement | null> | null
  rippleRef?: MutableRefObject<HTMLElement>
}

const COMPONENT_NAME = 'RippleContext'

export const RippleContext = createContext<RippleContextType>({
  color: 'primary',
  containerRef: null,
})

RippleContext.displayName = COMPONENT_NAME
