import { useState, useCallback } from 'react'

type DisclosureCallbacks = {
  onOpen?(): void
  onClose?(): void
}

export function useDisclosure(
  initialState = false,
  callbacks?: DisclosureCallbacks,
) {
  const { onOpen, onClose } = callbacks || {}
  const [opened, setOpened] = useState(initialState)

  const open = useCallback(() => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.()
        return true
      }
      return isOpened
    })
  }, [onOpen])

  const close = useCallback(() => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.()
        return false
      }
      return isOpened
    })
  }, [onClose])

  const toggle = useCallback(() => {
    opened ? close() : open()
  }, [close, open, opened])

  return [opened, { open, close, toggle }] as const
}
