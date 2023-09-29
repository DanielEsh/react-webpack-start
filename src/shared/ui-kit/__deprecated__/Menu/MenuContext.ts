import { createContext } from 'react'

export interface MenuContextType {
  test: boolean
}

const COMPONENT_NAME = 'MenuContext'

export const MenuContext = createContext<MenuContextType>({
  test: true,
})

MenuContext.displayName = COMPONENT_NAME
