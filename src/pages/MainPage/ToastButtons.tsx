import { Button } from 'shared/ui-kit/Button'
import { useNotification } from 'shared/notification'

export const ToastButtons = () => {
  const { showNotification: show } = useNotification()

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

  const successToast = () => {
    show({
      id: 'successToast',
      title: 'Success toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'success',
    })
  }

  const warningToast = () => {
    show({
      id: 'warningToast',
      title: 'Warning toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'warning',
    })
  }

  const errorToast = () => {
    show({
      id: 'errorToast',
      title: 'Error toast',
      message: <div>Message Message Message Message Message</div>,
      type: 'error',
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
