import { createEvent, createStore, sample } from 'effector'

interface AuthStore {
  isSuccessAuth: boolean
  accessToken?: string
  refreshToken?: string
}

type SetAuthTokens = Pick<AuthStore, 'accessToken' | 'refreshToken'>

export const setAuthTokens = createEvent<SetAuthTokens>()

export const $authStore = createStore<AuthStore>({
  isSuccessAuth: false,
})

$authStore.on(setAuthTokens, (state, payload) => ({
  accessToken: payload.accessToken || state.accessToken,
  refreshToken: payload.refreshToken || state.refreshToken,
  ...state,
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
