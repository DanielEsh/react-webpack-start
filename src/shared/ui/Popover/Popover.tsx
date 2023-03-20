import { useState, useRef } from 'react'
import { useFloating, offset as floatingOffset } from '@floating-ui/react-dom'
import type { Placement } from '@floating-ui/react-dom'
import { Portal } from 'shared/ui/Portal/Portal'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'

type Offset = {
  side: number
  align: number
}

export interface PopoverProps {
  placement: Placement
  offset?: Offset
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

const DEFAULT_OFFSET: Offset = {
  side: 10,
  align: 10,
}

export const Popover = (props: PopoverProps) => {
  const { placement, offset = DEFAULT_OFFSET } = props

  const [isOpen, setOpen] = useState(false)

  const { reference, floating, strategy, x, y } = useFloating({
    strategy: 'fixed',
    placement,
    middleware: [
      floatingOffset({
        mainAxis: offset.side,
        alignmentAxis: offset.align,
      }),
    ].filter(isDefined),
  })

  const defaultRef = useRef<any>(null)
  const composedRef = useComposedRefs(defaultRef, reference)

  useClickOutside(defaultRef, () => {
    setOpen(false)
  })

  return (
    <div className="mt-6">
      {isOpen ? (
        <Portal>
          <div
            ref={floating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              visibility: x == null ? 'hidden' : 'visible',
            }}
          >
            Popover floating
          </div>
        </Portal>
      ) : null}
      <div
        ref={composedRef}
        className="inline-flex"
        onClick={() => setOpen(!isOpen)}
      >
        Popover trigger
      </div>
    </div>
  )
}
