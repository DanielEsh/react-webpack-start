import { PropsWithChildren, createContext } from 'react'
import { useNotificationsState } from './NotificationsState'
import { ToastType } from './types'

export interface NotificationContextType {
  notifications: ToastType[]
  queue: ToastType[]
  showNotification: (notification: ToastType) => void
}

export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  queue: [],
  showNotification: (notification) => notification,
})

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
