import { useContext } from 'react'
import { NotificationContext } from 'shared/notification/NotificationContext'

export function useNotification() {
  const {
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    queue,
    cleanQueue,
  } = useContext(NotificationContext)

  return {
    showNotification,
    updateNotification,
    hideNotification,
    clean,
    queue,
    cleanQueue,
  }
}
