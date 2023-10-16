import { createEffect, createStore } from 'effector'

interface AppStore {
  user?: any
  accessToken?: string
  refreshToken?: string
}

export const $appStore = createStore<AppStore>({})
