import Counter from 'components/Counter'
import { ChangeLangButton } from 'components/ChangeLangButton'
import { Ripple } from 'shared/ui-kit/Ripple'
import { Button } from 'shared/ui-kit/Button'
import { Modal } from 'shared/ui-kit/Modal'
import { Menu } from 'shared/ui-kit/Menu'
import StarIcon from 'shared/assets/icons/star.svg'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'

import { $notifications, show } from 'shared/ui-kit/Toast/event'
import { useList, useStore } from 'effector-react'

export const MainPage = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const notifications = useStore($notifications)
  const toasts = useList($notifications, (toast) => (
    <div key={toast.id}>
      <div>{toast.title}</div>
      <div>{toast.message}</div>
    </div>
  ))

  const openNotification = () => {
    console.log('Notification')
    show({
      id: 'test',
      title: 'title',
      message: 'message',
    })

    console.log('RESULT', notifications)
    console.log('RENDER', toasts)
  }

  return (
    <div>
      <h1>MainPage</h1>
      <Counter />
      <ChangeLangButton />
      <Ripple.Container className="flex h-24 w-24 items-center justify-center rounded-md bg-black text-white">
        children
        <Ripple />
      </Ripple.Container>
      <Button onClick={open}>btn</Button>
      <StarIcon />

      <div>
        <Button onClick={openNotification}>Notification</Button>
      </div>
      {/* <div>
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
      </div> */}

      <div className="inline-flex flex-col">
        <span> MENU </span>

        <Menu>
          <Menu.Trigger>Menu Trigger</Menu.Trigger>

          <Menu.Dropdown>
            <Menu.Label> Label </Menu.Label>
            <Menu.Item>item1</Menu.Item>
            <Menu.Item>item2</Menu.Item>
          </Menu.Dropdown>
        </Menu>

        <Modal
          opened={opened}
          onClose={close}
        >
          Base Modal
        </Modal>
      </div>
    </div>
  )
}
