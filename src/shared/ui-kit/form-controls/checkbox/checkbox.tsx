import { ChangeEvent, forwardRef, ReactNode, useId, useState } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import IconCheck from 'shared/assets/icons/check.svg'
import { classNames } from 'shared/utils'

// interface TemplateProps extends UiDefaultProps {
//   props: string
// }

interface CheckboxProps {
  label?: ReactNode
  checked?: boolean
  disabled?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const COMPONENT_NAME = 'Checkbox'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (props, forwardedRef) => {
    const [checked, setChecked] = useState(false)
    const id = useId()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked)
      props.onChange && props.onChange(event)
    }

    const iconClasses = classNames(
      'pointer-events-none absolute inset-0 m-auto w-[60%] text-black opacity-0',
      {
        'text-white opacity-100': checked,
      },
    )

    return (
      <div className="flex items-center space-x-2">
        <div className="relative h-5 w-5">
          <input
            id={id}
            ref={forwardedRef}
            type="checkbox"
            className="block h-full w-full appearance-none rounded-sm border border-black bg-white checked:bg-black"
            checked={checked}
            onChange={handleChange}
          />

          <IconCheck className={iconClasses} />
        </div>
        <label htmlFor={id}>{props.label}</label>
      </div>
    )
  },
)

Checkbox.displayName = COMPONENT_NAME
