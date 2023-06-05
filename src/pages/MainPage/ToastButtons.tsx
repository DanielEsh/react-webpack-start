import { useStore } from 'effector-react'
import { Button } from 'shared/ui-kit/Button'
import { $notifications, show } from 'shared/ui-kit/Toast/event'

export const ToastButtons = () => {
  const notifications = useStore($notifications)

  const openNotification = () => {
    show({
      id: 'test',
      title: 'title',
      message: 'message',
    })
  }

  const openOtherToast = () => {
    show({
      id: 'otherToast',
      title: 'otherToast',
      message: (
        <div>
          Message as <span>element</span>
        </div>
      ),
    })
  }

  return (
    <div className="inline-flex flex-col gap-3">
      <Button onClick={openNotification}>Notification 1</Button>
      <Button onClick={openOtherToast}>Notification 2</Button>
    </div>
  )
}
