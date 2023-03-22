import { useContext } from 'react'
import { PopoverContext } from './Context'

export const PopoverArrow = () => {
  const { arrowRef, arrowStyles } = useContext(PopoverContext)
  return (
    <span
      ref={arrowRef}
      style={arrowStyles}
      className="absolute h-2 w-2 rotate-45 bg-neutral-800"
    />
  )
}
