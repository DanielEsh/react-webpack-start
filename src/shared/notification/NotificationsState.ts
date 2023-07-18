import { NotificationType, CreatedNotificationType } from './types'
import { useQueue } from '../ui-kit/Toast/useQueue'

const LIMIT = 2

const initialValues: NotificationType[] = [
  {
    id: 'test',
    type: 'default',
    message: 'message',
    title: 'title',
    autoClose: true,
    duration: 5,
  },
  {
    id: 'test2',
    type: 'default',
    message: 'message',
    title: 'title',
    autoClose: true,
    duration: 5,
  },
]

export const useNotificationsState = () => {
  const { state, queue, update, cleanQueue } = useQueue<NotificationType>({
    initialValues: initialValues,
    limit: LIMIT,
  })

  const createNotificationFactory = (
    queueItem: NotificationType,
  ): CreatedNotificationType => {
    const DEFAULT_DURATION = 5
    const {
      id,
      title,
      type,
      message,
      autoClose = true,
      duration = DEFAULT_DURATION,
    } = queueItem

    return {
      id,
      message,
      autoClose,
      duration,
      title,
      type,
      onClose: () => {
        throw new Error('not implement')
      },
      onOpen: () => {
        throw new Error('not implement')
      },
    }
  }

  const showNotification = (notification: NotificationType) => {
    const createdNotification = createNotificationFactory(notification)
    const id = createdNotification.id

    update((notifications) => {
      if (
        createdNotification.id &&
        notifications.some((n) => n.id === createdNotification.id)
      ) {
        return notifications
      }

      return [...notifications, { ...createdNotification, id }]
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
