import { useContext } from 'react'

import { Portal } from 'shared/ui-kit/portal'

import { NotificationContext } from './notification-context'
import { NotificationElement } from './notification-element'

const COMPONENT_NAME = 'NotificationRoot'

const TOAST_ROOT_ELEMENT = document.getElementById('toasts')

export const NotificationRoot = () => {
  const { notifications, hideNotification } = useContext(NotificationContext)

  return (
    <Portal container={TOAST_ROOT_ELEMENT}>
      <ol className="fixed top-[16px] right-[16px] flex min-w-[220px] flex-col gap-4">
        {notifications.map((notification) => (
          <NotificationElement
            key={notification.id}
            notification={notification}
            onHide={hideNotification}
          />
        ))}
      </ol>
    </Portal>
  )
}

NotificationRoot.displayName = COMPONENT_NAME
