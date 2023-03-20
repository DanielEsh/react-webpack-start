import { useEventListener } from 'shared/lib/hooks/useEventListener'

export type KeyPredicate = (event: KeyboardEvent) => boolean
export type KeyFilter = null | undefined | string | string[] | KeyPredicate
export type KeyPressEventName = 'keydown' | 'keypress' | 'keyup'

export type OnKeyPressOptions = {
  eventName?: KeyPressEventName
}

type handlerType = (event: KeyboardEvent) => void

const createKeyPredicate = (keyFilter: KeyFilter): KeyPredicate => {
  if (typeof keyFilter === 'function') return keyFilter
  else if (typeof keyFilter === 'string')
    return (event: KeyboardEvent) => event.key === keyFilter
  else if (Array.isArray(keyFilter))
    return (event: KeyboardEvent) => keyFilter.includes(event.key)
  else if (keyFilter) return () => true
  else return () => false
}

/**
 * @Example
 useKeypress(['ArrowLeft', 'ArrowRight'], callback);
 */

export const useKeyPress = (
  key: KeyFilter,
  handler: handlerType,
  options: OnKeyPressOptions = {},
) => {
  const { eventName = 'keydown' } = options
  const predicate = createKeyPredicate(key)

  useEventListener(eventName, (event) => {
    if (predicate(event as KeyboardEvent)) handler(event as KeyboardEvent)
  })
}
