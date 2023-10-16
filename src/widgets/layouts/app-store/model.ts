import { createEffect, createStore } from 'effector'

interface AppStore {
  user?: any
  accessToken?: string
  refreshToken?: string
}

export const fillUser = createEffect()
export const fillTokens = createEffect()

export const $appStore = createStore<AppStore>({})

$appStore.on(fillUser, (state, payload) => ({ user: payload }))

$appStore.watch((state) => {
  console.log('WATCH', state)
})
