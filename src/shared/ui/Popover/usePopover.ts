import { useState } from 'react'
import {
  useFloating,
  offset as floatingUiOffset,
  flip,
  arrow as floatingUiArrow,
} from '@floating-ui/react-dom'
import type { Placement, Offset } from './types'

interface Options {
  placement: Placement
  offset: Offset
  visible: boolean
  arrow?: any
  arrowPadding: any
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined
}

export function usePopover(options: Options) {
  const { placement, offset, visible = false, arrow, arrowPadding } = options

  const [isOpened, setOpened] = useState(visible)

  const ARROW_HEIGHT = 4

  const {
    reference,
    floating,
    strategy,
    x,
    y,
    placement: floatingUIPlacement,
    middlewareData: { arrow: { x: arrowX, y: arrowY, centerOffset } = {} },
  } = useFloating({
    strategy: 'fixed',
    placement,
    middleware: [
      floatingUiOffset({
        mainAxis: offset.side + ARROW_HEIGHT,
        alignmentAxis: offset.align,
      }),
      floatingUiArrow({ element: arrow, padding: arrowPadding }),
      flip(),
    ].filter(isDefined),
  })

  console.log('floatingUIPlacement', floatingUIPlacement)

  const popoverStyles = {
    position: strategy,
    top: y ?? 0,
    left: x ?? 0,
  }

  const currentPlacement = options?.placement
    ? options.placement.split('-')[0]
    : ''

  const staticSide: any = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right',
  }[currentPlacement]

  const arrowStyles = {
    left: arrowX != null ? `${arrowX}px` : '',
    top: arrowY != null ? `${arrowY}px` : '',
    right: '',
    bottom: '',
    [staticSide]: '-4px',
  }

  return {
    isOpened,
    changeOpened: (val: boolean) => setOpened(val),
    referenceRef: reference,
    floatingRef: floating,
    popoverStyles: popoverStyles,
    arrowStyles: arrowStyles,
  }
}
