import { forwardRef, useContext } from 'react'
import { Button } from 'shared/ui-kit/button'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { SelectContext } from 'shared/ui-kit/form-controls/select/select-context'
import { Popover } from 'shared/ui-kit/Popover'
import { classNames } from 'shared/utils'

type SelectValueProps = UiDefaultProps

const COMPONENT_NAME = 'SelectValue'

export const SelectValue = forwardRef<HTMLButtonElement, SelectValueProps>(
  (props, forwardedRef) => {
    const { className, children } = props

    const { selectedValue, label } = useContext(SelectContext)

    const value = selectedValue ? selectedValue : children

    const icon = () => {
      return (
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 opacity-50"
          aria-hidden="true"
        >
          <path
            d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
            fill="currentColor"
          ></path>
        </svg>
      )
    }

    const labelClasses = classNames(
      'absolute left-3 top-1/2 -translate-y-1/2 bg-white transition-all duration-150 ease-linear',
      {
        ['left-0 top-0 -translate-y-1/2 scale-75 px-2']: true,
        ['text-red-500']: false,
      },
    )

    return (
      <Popover.Trigger>
        <div className="relative">
          <Button
            ref={forwardedRef}
            className={className}
            addonRight={icon()}
            type="button"
          >
            {value}
          </Button>

          <span className={labelClasses}>{label}</span>
        </div>
      </Popover.Trigger>
    )
  },
)

SelectValue.displayName = COMPONENT_NAME
