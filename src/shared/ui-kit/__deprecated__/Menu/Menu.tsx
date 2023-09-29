import { PropsWithChildren } from 'react'
import { type MenuContextType, MenuContext } from './MenuContext'
import { Popover } from 'shared/ui-kit/__deprecated__/Popover'
import { MenuTrigger } from './MenuTrigger'
import { MenuDropdown } from './MenuDropdown'
import { MenuItem } from './MenuItem'
import { MenuLabel } from './MenuLabel'

type MenuProps = PropsWithChildren

const MenuRoot = ({ children }: MenuProps) => {
  const context: MenuContextType = {
    test: true,
  }

  return (
    <MenuContext.Provider value={context}>
      <Popover placement="bottom-end">{children}</Popover>
    </MenuContext.Provider>
  )
}

export const Menu = Object.assign(MenuRoot, {
  Trigger: MenuTrigger,
  Dropdown: MenuDropdown,
  Label: MenuLabel,
  Item: MenuItem,
})
