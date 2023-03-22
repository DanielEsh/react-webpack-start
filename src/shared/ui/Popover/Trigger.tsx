import { useContext, PropsWithChildren } from 'react'
import { PopoverContext } from './Context'

export const PopoverTrigger = (props: PropsWithChildren) => {
  const { referenceRef, triggerType, isOpened, togglePopover } =
    useContext(PopoverContext)

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
      ref={referenceRef}
      className="inline-flex"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </div>
  )
}
