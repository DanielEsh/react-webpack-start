import { Button } from 'shared/ui/Button'
import { Menu } from 'shared/ui/Menu'
import { TableVisibilityChanger } from './TableVisibilityChanger'

export const TableSettingsButton = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button> Settings </Button>
      </Menu.Trigger>

      <Menu.Dropdown>
        <TableVisibilityChanger />
      </Menu.Dropdown>
    </Menu>
  )
}
