import { useContext, PropsWithChildren } from 'react'
import { PopoverContext } from './Context'

export const PopoverTrigger = (props: PropsWithChildren) => {
  const { referenceRef, triggerType, togglePopover } =
    useContext(PopoverContext)

  const handleClick = () => {
    if (triggerType === 'click' && togglePopover) togglePopover(true)
  }

  const handleMouseEnter = () => {
    if (triggerType === 'hover' && togglePopover) togglePopover(true)
  }

  const handleMouseLeave = () => {
    if (triggerType === 'hover' && togglePopover) togglePopover(false)
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
