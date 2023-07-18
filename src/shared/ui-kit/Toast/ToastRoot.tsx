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

  // useDidUpdate(() => {
  //   console.log('PREV', previousLength.current)
  //   console.log('CUR', notifications.length)
  //   if (notifications.length > previousLength.current) {
  //     setTimeout(() => {
  //       forceUpdate()
  //       console.log('force update')
  //     }, 0)
  //     console.log('DID UPDATE')
  //     previousLength.current = notifications.length
  //   }
  // }, [notifications])

  const renderToasts = () =>
    notifications.map((toast, index) => (
      <Toast
        key={toast.id}
        index={index}
        toast={toast}
        autoClose={5000}
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
