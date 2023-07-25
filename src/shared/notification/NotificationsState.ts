import {
  Notification,
  CreatedNotification,
  NotificationVariants,
} from './types'
import { useQueue } from '../ui-kit/Toast/useQueue'

const LIMIT = 2

const initialValues: CreatedNotification[] = [
  // {
  //   id: 'test',
  //   type: 'default',
  //   message: 'message',
  //   title: 'title',
  //   autoClose: true,
  //   duration: 5,
  // },
  // {
  //   id: 'test2',
  //   type: 'default',
  //   message: 'message',
  //   title: 'title',
  //   autoClose: true,
  //   duration: 5,
  // },
]

export const useNotificationsState = () => {
  const { state, queue, update, cleanQueue } = useQueue<CreatedNotification>({
    initialValues: initialValues,
    limit: LIMIT,
  })

  const createNotificationFactory = (
    queueItem: Notification,
  ): CreatedNotification => {
    const defaultValues = {
      type: 'default' as NotificationVariants,
      duration: 5,
      autoClose: true,
    }

    const {
      id,
      title,
      type = defaultValues.type,
      message,
      autoClose = defaultValues.autoClose,
      duration = defaultValues.duration,
      ...props
    } = queueItem

    return {
      id,
      title,
      message,
      type,
      autoClose,
      duration,
      ...props,
    }
  }

  const showNotification = (notification: Notification) => {
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

  const updateNotification = (notification: CreatedNotification) =>
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
          typeof notification.onClose === 'function' && notification.onClose()
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
