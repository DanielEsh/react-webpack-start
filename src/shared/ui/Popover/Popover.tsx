import { useRef } from 'react'
import type { Placement, Offset, Trigger } from './types'
import { Portal } from 'shared/ui/Portal/Portal'
import { usePopover } from './usePopover'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside/useClickOutside'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'
import { useKeyPress } from 'shared/lib/hooks/useKeyPress'

export interface PopoverProps {
  placement: Placement
  offset?: Offset
  visible?: boolean
  triggerType?: Trigger
}

const DEFAULT_OFFSET: Offset = {
  side: 10,
  align: 10,
}

export const Popover = (props: PopoverProps) => {
  const {
    placement,
    offset = DEFAULT_OFFSET,
    visible = false,
    triggerType = 'click',
  } = props

  const { isOpened, changeOpened, referenceRef, floatingRef, popoverStyles } =
    usePopover({
      placement,
      offset,
      visible,
    })

  const defaultRef = useRef<any>(null)
  const composedRef = useComposedRefs(defaultRef, referenceRef)

  const changePopover = (value: boolean) => {
    changeOpened(value)
  }

  const handleClick = () => {
    if (triggerType === 'click') changePopover(true)
  }

  const handleMouseEnter = () => {
    if (triggerType === 'hover') changePopover(true)
  }

  const handleMouseLeave = () => {
    if (triggerType === 'hover') changePopover(false)
  }

  useClickOutside(defaultRef, () => changePopover(false))

  useKeyPress(['Escape'], () => changePopover(false))

  return (
    <div className="mt-6">
      {isOpened ? (
        <Portal>
          <div
            ref={floatingRef}
            className="flex rounded-md bg-neutral-800/80 p-2 text-white"
            style={popoverStyles}
          >
            Popover floating
          </div>
        </Portal>
      ) : null}

      <div
        ref={composedRef}
        className="inline-flex"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Popover trigger
      </div>
    </div>
  )
}