import { forwardRef, useContext } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { SelectContext } from 'shared/ui-kit/form-controls/select/select-context'

interface SelectItemProps extends UiDefaultProps {
  value: string | number
}

const COMPONENT_NAME = 'SelectOption'

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { className, children, value } = props

    const { selectedValue, changeSelectedValue } = useContext(SelectContext)

    const handleClick = () => {
      changeSelectedValue(value)
    }

    const isSelected = selectedValue === value

    const classes = classNames('', className, {
      ['bg-blue-200']: isSelected,
    })

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
