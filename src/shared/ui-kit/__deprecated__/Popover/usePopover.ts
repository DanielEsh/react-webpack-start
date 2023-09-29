import { useState } from 'react'
import {
  useFloating,
  offset as floatingUiOffset,
  flip,
  arrow as floatingUiArrow,
  size,
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

  const floating = useFloating({
    strategy: 'absolute',
    placement,
    middleware: [
      floatingUiOffset({
        mainAxis: offset.side + ARROW_HEIGHT,
        alignmentAxis: offset.align,
      }),
      floatingUiArrow({ element: arrow, padding: arrowPadding }),
      flip(),
      size({
        apply: ({ elements, rects }) => {
          const { width: anchorWidth, height: anchorHeight } = rects.reference
          const contentStyle = elements.floating.style
          contentStyle.setProperty('--popover-anchor-width', `${anchorWidth}px`)
          contentStyle.setProperty(
            '--popover-anchor-height',
            `${anchorHeight}px`,
          )
        },
      }),
    ].filter(isDefined),
  })

  const popoverStyles = {
    position: floating.strategy,
    ...floating.floatingStyles,
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
    left:
      floating.middlewareData.arrow?.x != null
        ? `${floating.middlewareData.arrow?.y}px`
        : '',
    top:
      floating.middlewareData.arrow?.y != null
        ? `${floating.middlewareData.arrow?.y}px`
        : '',
    right: '',
    bottom: '',
    [staticSide]: '-4px',
  }

  return {
    isOpened,
    changeOpened: (val: boolean) => setOpened(val),
    referenceRef: floating.refs.setReference,
    floatingRef: floating.refs.setFloating,
    popoverStyles: popoverStyles,
    arrowStyles: arrowStyles,
  }
}
