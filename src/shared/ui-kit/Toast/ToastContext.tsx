import { PropsWithChildren, createContext } from 'react'
import { useNotificationsState } from './NotificationsState'

export const NotificationContext = createContext({})

export const ToastProvider = (props: PropsWithChildren) => {
  const {
    notifications,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState()

  const notificationProviderValue = {
    notifications,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  }

  return (
    <NotificationContext.Provider value={notificationProviderValue}>
      {props.children}
    </NotificationContext.Provider>
  )
}
