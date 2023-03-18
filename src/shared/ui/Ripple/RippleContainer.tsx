import { ElementType, forwardRef, ReactNode, useRef } from 'react'
import {
  RippleContext,
  RippleContextType,
} from 'shared/ui/Ripple/RippleContext'
import { classNames } from 'shared/utils'
import { useComposedRefs } from 'shared/hooks/useComposedRefs'

export interface RippleContainerProps {
  children: ReactNode
  as?: ElementType
  className?: string
}

export const RippleContainer = forwardRef<RippleContainerProps, any>(
  (props, forwardedRef) => {
    const { children, as: Tag = 'div', className, ...restProps } = props

    const containerRef = useRef<any | null>(null)

    const ref = useComposedRefs(containerRef, forwardedRef)

    const context: RippleContextType = {
      color: 'primary',
      containerRef,
    }

    const classes = classNames('relative overflow-hidden', className)

    return (
      <RippleContext.Provider value={context}>
        <Tag
          ref={ref}
          className={classes}
          {...restProps}
        >
          {children}
        </Tag>
      </RippleContext.Provider>
    )
  },
)
