import { Dropdown } from 'shared/ui-kit/dropdown'
import { Button, Divider } from 'shared/ui-kit'

export const DropdownDemo = () => {
  const handleNewTabClick = () => {
    console.log('new tab')
  }

  const handleNewWindowClick = () => {
    console.log('new window click')
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Open Menu</Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item onClick={handleNewTabClick}>New Tab</Dropdown.Item>
        <Dropdown.Item onClick={handleNewWindowClick}>New Window</Dropdown.Item>
        <Dropdown.Item>New Private Window</Dropdown.Item>
        <Divider />
        <Dropdown.Item>More Tools</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  )
}
