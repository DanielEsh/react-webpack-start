import Counter from 'components/Counter'
import { ChangeLangButton } from 'components/ChangeLangButton'
import { DataTable } from 'components/DataTable'
import { Ripple } from 'shared/ui/Ripple'
import { Button } from 'shared/ui/Button'
import { Popover } from 'shared/ui/Popover'
import { Menu } from 'shared/ui/Menu'
import StarIcon from 'shared/assets/icons/star.svg'

export const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <DataTable />
      <Counter />
      <ChangeLangButton />
      <Ripple.Container className="flex h-24 w-24 items-center justify-center rounded-md bg-black text-white">
        children
        <Ripple />
      </Ripple.Container>
      <Button>btn</Button>
      <StarIcon />

      <div>
        <Popover
          placement="top"
          visible
        >
          <Popover.Trigger>Trigger</Popover.Trigger>
          <Popover.Floating>Content</Popover.Floating>
        </Popover>
      </div>

      <div>
        <Popover
          placement="bottom"
          triggerType="hover"
        >
          <Popover.Trigger className="mt-5">Trigger</Popover.Trigger>
          <Popover.Floating>Content</Popover.Floating>
        </Popover>
      </div>

      <div>
        <Popover placement="left">
          <Popover.Trigger className="mt-5">Trigger</Popover.Trigger>
          <Popover.Floating>Content</Popover.Floating>
        </Popover>
      </div>

      <div>
        <Popover placement="right">
          <Popover.Trigger className="mt-5">Trigger</Popover.Trigger>
          <Popover.Floating>Content</Popover.Floating>
        </Popover>
      </div>

      <div className="inline-flex flex-col">
        <span> MENU </span>

        <Menu>
          <Menu.Trigger>Menu Trigger</Menu.Trigger>

          <Menu.Dropdown>
            <Menu.Label />
            <Menu.Item />
          </Menu.Dropdown>
        </Menu>
      </div>
    </div>
  )
}
