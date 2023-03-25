import { useContext, forwardRef, useImperativeHandle, useRef } from 'react'
import { TypeWithChidlren } from './types'
import { PopoverContext } from './Context'
import { useComposedRefs } from 'shared/lib/hooks/useComposedRefs'

export const PopoverTrigger = forwardRef<
  HTMLDivElement | null,
  TypeWithChidlren
>(({ children }, forwardedRef) => {
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
      className="inline-flex"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
})
