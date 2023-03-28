import { MutableRefObject } from 'react'

import { useEventListener } from 'shared/lib/hooks/useEventListener'

type Handler = (event: MouseEvent) => void

export function useClickOutside<
  T extends HTMLElement | null = HTMLElement | null,
>(
  ref: MutableRefObject<T>,
  handler: Handler,
  mouseEvent: 'mousedown' | 'mouseup' = 'mousedown',
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current

    // Do nothing if clicking ref's element or descendent elements
    if (!el || el.contains(event.target as Node)) return

    // Explicit type for "mousedown" event.
    handler(event as unknown as MouseEvent)
  })
}
