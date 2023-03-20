import { useFloating } from '@floating-ui/react-dom'

export const Popover = () => {
  const { reference, floating, strategy, x, y } = useFloating({
    strategy: 'fixed',
    placement: 'top',
  })

  return (
    <div className="mt-6">
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
      <div
        ref={reference}
        className="inline-flex"
      >
        Popover trigger
      </div>
    </div>
  )
}
