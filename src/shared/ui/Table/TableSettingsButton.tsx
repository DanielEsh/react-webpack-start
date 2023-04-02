import { Button } from 'shared/ui/Button'
import { Menu } from 'shared/ui/Menu'
import { TableVisibilityChanger } from './TableVisibilityChanger'
import IconSettings from 'shared/assets/icons/settings.svg'

export const TableSettingsButton = () => {
  return (
    <Menu>
      <Menu.Trigger>
        <Button>
          <IconSettings />
        </Button>
      </Menu.Trigger>

      <Menu.Dropdown>
        <TableVisibilityChanger />
      </Menu.Dropdown>
    </Menu>
  )
}
