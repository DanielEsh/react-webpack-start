import { useRef } from 'react'
import { RippleProps } from 'shared/ui/Ripple/Ripple'
import {
  RippleContext,
  RippleContextType,
} from 'shared/ui/Ripple/RippleContext'
import { classNames } from 'shared/utils'

export const RippleContainer = ({ children, className }: RippleProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  const context: RippleContextType = {
    color: 'primary',
    containerRef,
  }

  const classes = classNames('relative overflow-hidden', className)

  return (
    <RippleContext.Provider value={context}>
      <div
        ref={containerRef}
        className={classes}
      >
        {children}
      </div>
    </RippleContext.Provider>
  )
}
