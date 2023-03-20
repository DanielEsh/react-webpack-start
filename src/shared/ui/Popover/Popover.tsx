import { useState } from 'react'
import { useFloating } from '@floating-ui/react-dom'
import type { Placement } from '@floating-ui/react-dom'
import { Portal } from 'shared/ui/Portal/Portal'

export interface PopoverProps {
  placement: Placement
}

export const Popover = (props: PopoverProps) => {
  const { placement } = props

  const [isOpen, setOpen] = useState(false)

  const { reference, floating, strategy, x, y } = useFloating({
    strategy: 'fixed',
    placement,
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
