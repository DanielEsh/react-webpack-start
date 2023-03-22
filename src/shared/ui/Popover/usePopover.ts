import { useState } from 'react'
import { useFloating, offset as floatingOffset } from '@floating-ui/react-dom'
import type { Placement, Offset } from './types'

interface Options {
  placement: Placement
  offset: Offset
  visible: boolean
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

export function usePopover(options: Options) {
  const { placement, offset, visible = false } = options

  const [isOpened, setOpened] = useState(visible)

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

  const popoverStyles = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  }

  return {
    isOpened,
    changeOpened: (val: boolean) => setOpened(val),
    referenceRef: reference,
    floatingRef: floating,
    popoverStyles: popoverStyles,
  }
}