import { createEvent, createStore } from 'effector'

interface AppStore {
  user?: any
  accessToken?: string
  refreshToken?: string
}

export const fillUser = createEvent()

interface Tokens {
  accessToken?: string
  refreshToken?: string
}
export const fillTokens = createEvent<Tokens>()

export const logout = createEvent()

export const $appStore = createStore<AppStore>({})

$appStore.on(fillUser, (state, payload) => ({ user: payload, ...state }))
$appStore.on(fillTokens, (state, payload) => ({ ...state, ...payload }))
$appStore.on(logout, () => ({
  user: null,
  refreshToken: '',
  accessToken: '',
}))

$appStore.watch((state) => {
  console.log('WATCH', state)
})
