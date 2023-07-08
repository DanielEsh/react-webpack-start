import { Portal } from '../Portal'
import { useStore } from 'effector-react'
import { $notifications } from './event'
import { Toast } from './Toast'
import { useNotificationsState } from './NotificationsState'
import { useContext, useRef } from 'react'
import { NotificationContext } from './ToastContext'
import { useDidUpdate } from 'shared/lib/hooks/useDidUpdate/use-did-update'
import { useForceUpdate } from 'shared/lib/hooks/useForceUpdate'

const COMPONENT_NAME = 'ToastRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const ToastRoot = () => {
  // const { state: toasts } = useStore($notifications)
  const previousLength = useRef<number>(0)
  const forceUpdate = useForceUpdate()
  const { notifications, hideNotification } = useContext(NotificationContext)

  useDidUpdate(() => {
    if (notifications.length > previousLength.current) {
      setTimeout(() => forceUpdate(), 0)
    }
    previousLength.current = notifications.length
  }, [notifications])

  const renderToasts = () =>
    notifications.map((toast, index) => (
      <Toast
        key={index}
        index={index}
        toast={toast}
        onHide={hideNotification}
      />
    ))

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex min-w-[220px] flex-col gap-4">
        {renderToasts()}
      </ol>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
function forceUpdate(): void {
  throw new Error('Function not implemented.')
}

