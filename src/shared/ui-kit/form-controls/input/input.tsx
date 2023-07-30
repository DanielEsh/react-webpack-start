import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from 'react'
import { classNames } from 'shared/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  invalid?: boolean
}

const COMPONENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const {
      label,
      className,
      type = 'text',
      value: externalValue,
      onChange,
      invalid,
      placeholder,
      ...restProps
    } = props

    const [internalValue, setInternalValue] = useState(externalValue)
    const [isFocused, setFocused] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setInternalValue(event.target.value)
      onChange && onChange(event)
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
      {
        ['border-red-500']: invalid,
      },
    )

    const labelClasses = classNames(
      'absolute left-3 top-1/2 -translate-y-1/2 bg-white transition-all duration-150 ease-linear',
      {
        ['left-0 top-0 -translate-y-1/2 scale-75 px-2']:
          isFocused || internalValue || placeholder,
        ['text-red-500']: invalid,
      },
    )

    return (
      <label onBlur={() => handleFocusManagement(false)}>
        <div className="relative h-full w-full">
          <input
            value={internalValue}
            type={type}
            className={classes}
            ref={forwardedRef}
            onChange={handleChange}
            onFocus={() => handleFocusManagement(true)}
            onBlur={() => handleFocusManagement(false)}
            {...restProps}
          />

          <span className={labelClasses}>{label}</span>
        </div>
      </label>
    )
  },
)

Input.displayName = COMPONENT_NAME
