import { useState } from 'react'
import { useFloating } from '@floating-ui/react-dom'

export const Popover = () => {
  const [isOpen, setOpen] = useState(false)

  const { reference, floating, strategy, x, y } = useFloating({
    strategy: 'fixed',
    placement: 'top',
  })

  return (
    <div className="mt-6">
      {isOpen ? (
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
