import { useContext, forwardRef, useImperativeHandle, useRef } from 'react'
import { TypeWithChidlren } from 'shared/ui/types'
import { PopoverContext } from './Context'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'
import { classNames } from 'shared/utils'

export interface PopoverTriggerProps extends TypeWithChidlren {
  className?: string
}

export const PopoverTrigger = forwardRef<
  HTMLDivElement | null,
  PopoverTriggerProps
>(({ children, className }, forwardedRef) => {
  const innerRef = useRef<any>(null)

  useImperativeHandle(forwardedRef, () => innerRef.current)

  const { referenceRef, triggerType, isOpened, togglePopover } =
    useContext(PopoverContext)

  const composedRef = useComposedRefs(innerRef, referenceRef)

  const handleClick = () => {
    if (triggerType === 'click') togglePopover(!isOpened)
  }

  const handleMouseEnter = () => {
    if (triggerType === 'hover') togglePopover(!isOpened)
  }

  const handleMouseLeave = () => {
    if (triggerType === 'hover') togglePopover(!isOpened)
  }

  return (
    <div
      ref={composedRef}
      className={classNames('inline-flex', className)}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
})
