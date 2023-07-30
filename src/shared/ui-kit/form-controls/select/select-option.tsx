import { forwardRef, useContext } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { SelectContext } from 'shared/ui-kit/form-controls/select/select-context'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'
import { Button } from 'shared/ui-kit/Button'

interface SelectItemProps extends UiDefaultProps {
  value: SelectType
  disabled?: boolean
}

const COMPONENT_NAME = 'SelectOption'

export const SelectOption = forwardRef<HTMLLIElement, SelectItemProps>(
  (props, forwardedRef) => {
    const { className, children, value, disabled } = props

    const { selectedValue, changeSelectedValue } = useContext(SelectContext)

    const handleClick = () => {
      changeSelectedValue(value)
    }

    const isSelected = selectedValue === value

    const classes = classNames(
      'relative flex w-full select-none rounded-sm text-sm outline-none',
      className,
    )

    const buttonClasses = classNames(
      'flex rounded-md py-1.5 pl-2 pr-8 hover:bg-blue-500 disabled:bg-blue-200',
      {
        ['bg-blue-500']: isSelected,
      },
    )

    return (
      <li
        ref={forwardedRef}
        className={classes}
      >
        <Button
          variant="ghost"
          className={buttonClasses}
          onClick={handleClick}
          disabled={disabled}
        >
          {children}
        </Button>
      </li>
    )
  },
)

SelectOption.displayName = COMPONENT_NAME
