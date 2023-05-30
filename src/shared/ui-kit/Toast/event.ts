import { createStore, createApi } from 'effector'
import { ToastType } from './types'

export const $notifications = createStore<ToastType[]>([
  { id: 'test', message: 'message', title: 'title' },
  { id: 'test2', message: 'message', title: 'title' },
])

export const { show } = createApi($notifications, {
  show(list, payload: ToastType) {
    console.log('show', list, payload)
    const result = [...list]
    result.push(payload)
    return result
  },
})
