import { createStore, createApi } from 'effector'

export interface NotificationType {
  id: string
  title: string
  message: string
}

export const $notifications = createStore<NotificationType[]>([])

export const { show } = createApi($notifications, {
  show(list, payload: NotificationType) {
    console.log('show', list, payload)
    const result = [...list]
    result.push(payload)
    return result
  },
})
