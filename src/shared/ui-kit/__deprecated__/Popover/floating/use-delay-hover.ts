import { useRef, useEffect } from 'react'

interface UseDelayedHoverOptions {
  open(): void
  close(): void
  openDelay: number
  closeDelay: number
}

export function useDelayedHover(options: UseDelayedHoverOptions) {
  const openTimeout = useRef(-1)
  const closeTimeout = useRef(-1)

  const clearTimeouts = () => {
    window.clearTimeout(openTimeout.current)
    window.clearTimeout(closeTimeout.current)
  }

  const open = () => {
    clearTimeouts()

    if (options.openDelay === 0) {
      options.open()
    } else {
      openTimeout.current = window.setTimeout(options.open, options.openDelay)
    }
  }

  const close = () => {
    clearTimeouts()

    if (options.closeDelay === 0) {
      close()
    } else {
      closeTimeout.current = window.setTimeout(
        options.close,
        options.closeDelay,
      )
    }
  }

  useEffect(() => clearTimeouts, [])

  return { open, close }
}
