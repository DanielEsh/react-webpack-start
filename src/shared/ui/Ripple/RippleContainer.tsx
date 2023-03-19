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

const DEFAULT_TAG = 'div'

export const RippleContainer = forwardRef<HTMLElement, RippleContainerProps>(
  (props, forwardedRef) => {
    const { children, as: Tag = DEFAULT_TAG, className, ...restProps } = props

    const containerRef = useRef<HTMLElement | null>(null)

    const ref = useComposedRefs<HTMLElement>(containerRef, forwardedRef)

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
