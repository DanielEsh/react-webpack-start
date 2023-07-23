import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'
import { classNames } from 'shared/utils'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string
  onChange?: (value: string) => void
}

const COMPONENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const { className, type = 'text', onChange, ...restProps } = props

    const [value, setValue] = useState('')
    const [isFocused, setFocused] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
      onChange && onChange(event.target.value)
    }

    const handleFocusManagement = (focus: boolean) => {
      if (focus) {
        setFocused(focus)
        return
      }

      setFocused(focus)
    }

    const classes = classNames(
      'relative border-input bg-background focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )

    const labelClasses = classNames(
      'absolute left-3 top-1/2 -translate-y-1/2 bg-white transition-all duration-150 ease-linear',
      {
        ['left-0 top-0 -translate-y-1/2 scale-75 px-2']: isFocused || value,
      },
    )

    return (
      <label>
        <div className="relative h-full w-full">
          <input
            value={value}
            type={type}
            className={classes}
            ref={forwardedRef}
            onChange={handleChange}
            onFocus={() => handleFocusManagement(true)}
            onBlur={() => handleFocusManagement(false)}
            {...restProps}
          />

          <span className={labelClasses}>label</span>
        </div>
      </label>
    )
  },
)

Input.displayName = COMPONENT_NAME
