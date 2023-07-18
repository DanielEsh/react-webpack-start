import { useStore } from 'effector-react'
import { useContext } from 'react'
import { Button } from 'shared/ui-kit/Button'
import { NotificationContext } from 'shared/ui-kit/Toast/ToastContext'

export const ToastButtons = () => {
  const { showNotification: show } = useContext(NotificationContext)

  const openNotification = () => {
    show({
      id: 'test',
      title: 'title',
      message: 'message',
      autoClose: 5000,
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
      autoClose: 5000,
    })
  }

  const successToast = () => {
    show({
      id: 'successToast',
      title: 'Success toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'success',
      autoClose: 5000,
    })
  }

  const warningToast = () => {
    show({
      id: 'warningToast',
      title: 'Success toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'warning',
      autoClose: 5000,
    })
  }

  const errorToast = () => {
    show({
      id: 'errorToast',
      title: 'Success toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'error',
      autoClose: 5000,
    })
  }

  return (
    <div className="inline-flex flex-col gap-3">
      <Button onClick={openNotification}>Notification 1</Button>
      <Button onClick={openOtherToast}>Notification 2</Button>
      <Button onClick={successToast}>Success toast</Button>
      <Button onClick={errorToast}>Error toast</Button>
      <Button onClick={warningToast}>Warning toast</Button>
    </div>
  )
}
