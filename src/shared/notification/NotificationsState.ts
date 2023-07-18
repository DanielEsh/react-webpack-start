import { NotificationType } from './types'
import { useQueue } from '../ui-kit/Toast/useQueue'

const LIMIT = 2

const initialValues: NotificationType[] = [
  {
    id: 'test',
    type: 'default',
    message: 'message',
    title: 'title',
    autoClose: true,
    duration: 5000,
  },
  {
    id: 'test2',
    type: 'default',
    message: 'message',
    title: 'title',
    autoClose: true,
    duration: 5000,
  },
]

export const useNotificationsState = () => {
  const { state, queue, update, cleanQueue } = useQueue<NotificationType>({
    initialValues: initialValues,
    limit: LIMIT,
  })

  const showNotification = (notification: NotificationType) => {
    const id = notification.id

    update((notifications) => {
      if (
        notification.id &&
        notifications.some((n) => n.id === notification.id)
      ) {
        return notifications
      }

      return [...notifications, { ...notification, id }]
    })

    return id
  }

  const updateNotification = (notification: NotificationType) =>
    update((notifications) => {
      const index = notifications.findIndex((n) => n.id === notification.id)

      if (index === -1) {
        return notifications
      }

      const newNotifications = [...notifications]
      newNotifications[index] = notification

      return newNotifications
    })

  const hideNotification = (id: string) =>
    update((notifications) =>
      notifications.filter((notification) => {
        if (notification.id === id) {
          typeof notification.onClose === 'function' &&
            notification.onClose(notification)
          return false
        }

        return true
      }),
    )

  const clean = () => update(() => [])

  return {
    notifications: state,
    queue,
    showNotification,
    updateNotification,
    hideNotification,
    cleanQueue,
    clean,
  }
}
