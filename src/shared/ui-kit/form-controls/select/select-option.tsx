import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

interface SelectItemProps extends UiDefaultProps {
  value: string | number
}

const COMPONENT_NAME = 'SelectOption'

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { className, children, value } = props

    const handleClick = () => {
      console.log('onClick', value)
    }

    const classes = classNames('bg-blue-200', className)

    return (
      <li
        ref={forwardedRef}
        className={classes}
        onClick={handleClick}
      >
        {children}
      </li>
    )
  },
)

SelectOption.displayName = COMPONENT_NAME
