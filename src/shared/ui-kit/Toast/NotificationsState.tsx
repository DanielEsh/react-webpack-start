import { ToastType } from './types'
import { useQueue } from './useQueue'

const LIMIT = 2

const initialValues = [
  { id: 'test', message: 'message', title: 'title' },
  { id: 'test2', message: 'message', title: 'title' },
]

export const useNotificationsState = () => {
  const { state, queue, update, cleanQueue } = useQueue<ToastType>({
    initialValues: initialValues,
    limit: LIMIT,
  })

  const showNotification = (notification: ToastType) => {
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

  const updateNotification = (notification: ToastType) =>
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
