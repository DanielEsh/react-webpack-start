import { useContext } from 'react'

import { Portal } from 'shared/ui-kit/Portal'

import { NotificationContext } from './NotificationContext'
import { Notification } from './Notification'

const COMPONENT_NAME = 'NotificationRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const NotificationRoot = () => {
  const { notifications, hideNotification } = useContext(NotificationContext)

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex min-w-[220px] flex-col gap-4">
        {notifications.map((n) => (
          <Notification
            key={n.id}
            notification={n}
            onHide={hideNotification}
          />
        ))}
      </ol>
    </Portal>
  )
}

NotificationRoot.displayName = COMPONENT_NAME
