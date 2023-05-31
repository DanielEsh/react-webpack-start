import { createStore, createApi } from 'effector'
import { ToastType } from './types'

const initialValues = [
  { id: 'test', message: 'message', title: 'title' },
  { id: 'test2', message: 'message', title: 'title' },
]

const limit = 2

interface Store {
  state: ToastType[]
  queue: ToastType[]
}

export const $notifications = createStore<Store>({
  state: initialValues.slice(0, limit),
  queue: initialValues.slice(limit),
})

export const { show, hide } = createApi($notifications, {
  show(store, payload: ToastType) {
    const results = [...store.state, ...store.queue, payload]

    return {
      state: results.slice(0, limit),
      queue: results.slice(limit),
    }
  },
  hide(store, payload: number) {
    const results = [...store.state, ...store.queue]
    results.splice(payload, 1)

    return {
      state: results.slice(0, limit),
      queue: results.slice(limit),
    }
  },
})
