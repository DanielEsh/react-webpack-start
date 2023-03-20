import { useState } from 'react'
import { useFloating, offset as floatingOffset } from '@floating-ui/react-dom'
import type { Placement } from '@floating-ui/react-dom'
import { Portal } from 'shared/ui/Portal/Portal'

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
        ref={reference}
        className="inline-flex"
        onClick={() => setOpen(!isOpen)}
      >
        Popover trigger
      </div>
    </div>
  )
}
