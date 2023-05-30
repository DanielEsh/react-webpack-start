import { createEvent, createStore } from 'effector'

export interface NotificationType {
  id: string
  title: string
  message: string
}

export const showNotification = createEvent<NotificationType>()

export const $notifications = createStore<NotificationType[]>([]).on(
  showNotification,
  (state, payload) => {
    console.log('SHOW NOTIFICATIONS', payload)
    state.push(payload)
  },
)
