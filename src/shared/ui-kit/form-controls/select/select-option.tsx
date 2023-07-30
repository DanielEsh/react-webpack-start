import { forwardRef, useContext } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { SelectContext } from 'shared/ui-kit/form-controls/select/select-context'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'

interface SelectItemProps extends UiDefaultProps {
  value: SelectType
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

    const classes = classNames(
      'relative flex w-full select-none rounded-sm text-sm outline-none',
      className,
    )

    const buttonClasses = classNames(
      'flex rounded-md py-1.5 pl-2 pr-8 hover:bg-blue-500',
      {
        ['bg-blue-500']: isSelected,
      },
    )

    return (
      <li
        ref={forwardedRef}
        className={classes}
      >
        <button
          className={buttonClasses}
          onClick={handleClick}
        >
          {children}
        </button>
      </li>
    )
  },
)

SelectOption.displayName = COMPONENT_NAME
