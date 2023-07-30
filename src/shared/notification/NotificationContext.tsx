import { PropsWithChildren, createContext } from 'react'
import { useNotificationsState } from './NotificationsState'
import { CreatedNotification } from './types'

export interface NotificationContextType {
  notifications: CreatedNotification[]
  queue: CreatedNotification[]
  showNotification: (notification: CreatedNotification) => void
  updateNotification: (notification: CreatedNotification) => void
  hideNotification: (id: string) => void
  clean: () => void
  cleanQueue: () => void
}

export const NotificationContext = createContext<NotificationContextType>({
  notifications: [],
  queue: [],
  showNotification: () => {
    throw new Error('not implemented')
  },
  updateNotification: () => {
    throw new Error('not implemented')
  },
  hideNotification: () => {
    throw new Error('not implemented')
  },
  clean: () => {
    throw new Error('not implemented')
  },
  cleanQueue: () => {
    throw new Error('not implemented')
  },
})

export const NotificationProvider = (props: PropsWithChildren) => {
  const {
    notifications,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    cleanQueue,
  } = useNotificationsState()

  const notificationProviderValue: NotificationContextType = {
    notifications,
    queue,
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
