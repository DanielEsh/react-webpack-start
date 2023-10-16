import { createEvent, createStore, sample } from 'effector'

interface AuthStore {
  isSuccessAuth: boolean
  accessToken?: string | null
  refreshToken?: string | null
}

type SetAuthTokens = Pick<AuthStore, 'accessToken' | 'refreshToken'>

export const changeAuthStatus = createEvent<boolean>()
export const setAuthTokens = createEvent<SetAuthTokens>()
export const logout = createEvent()

export const $authStore = createStore<AuthStore>({
  isSuccessAuth: false,
})

$authStore.on(changeAuthStatus, (state, payload) => ({
  ...state,
  isSuccessAuth: payload,
}))
$authStore.on(setAuthTokens, (state, payload) => ({
  accessToken: payload.accessToken || state.accessToken,
  refreshToken: payload.refreshToken || state.refreshToken,
  ...state,
}))

$authStore.on(logout, () => ({
  isSuccessAuth: false,
  accessToken: null,
  refreshToken: null,
}))

sample({
  source: setAuthTokens,
  fn: ({ accessToken, refreshToken }) => {
    console.log('update token in LS')
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken)
    }
  },
})

sample({
  source: logout,
  fn: () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
  },
})
