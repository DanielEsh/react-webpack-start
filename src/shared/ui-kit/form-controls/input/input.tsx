import {
  ChangeEvent,
  forwardRef,
  InputHTMLAttributes,
  type ReactNode,
  useState,
} from 'react'
import { classNames } from 'shared/utils'

interface InputBaseProps {
  label: string
  className?: string
  prefix?: ReactNode
  suffix?: ReactNode
  invalid?: boolean
}

export type InputProps = InputBaseProps & InputHTMLAttributes<HTMLInputElement>

const COMPONENT_NAME = 'Input'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, forwardedRef) => {
    const {
      label,
      className,
      type = 'text',
      prefix,
      suffix,
      value,
      onChange,
      invalid,
      placeholder,
      ...restProps
    } = props

    const [isFocused, setFocused] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(event)
    }

    const handleFocusManagement = (focus: boolean) => {
      if (focus) {
        setFocused(focus)
        return
      }

      setFocused(focus)
    }

    const inputWrapperClasses =
      'relative flex items-center gap-3 h-14 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors'
    const fileClasses =
      'file:border-0 file:bg-transparent file:text-sm file:font-medium'
    const focusClasses =
      'focus-visible:border-black placeholder:text-muted-foreground focus-visible:outline-none '
    const disabledClasses = 'disabled:cursor-not-allowed disabled:opacity-50'

    const classes = classNames(
      inputWrapperClasses,
      fileClasses,
      focusClasses,
      disabledClasses,
      className,
      {
        ['border-red-500']: invalid,
        ['border-black']: isFocused,
      },
    )

    const labelClasses = classNames(
      'absolute left-3 top-1/2 -translate-y-1/2 bg-white transition-all duration-150 ease-linear',
      {
        ['left-0 top-0 -translate-y-1/2 scale-75 px-2']:
          isFocused || value || placeholder,
        ['text-red-500']: invalid,
      },
    )

    return (
      <label onBlur={() => handleFocusManagement(false)}>
        <div className="relative flex h-14 w-full">
          <div className={classes}>
            {prefix}

            <input
              className="w-full focus-visible:outline-none"
              value={value}
              type={type}
              ref={forwardedRef}
              onChange={handleChange}
              onFocus={() => handleFocusManagement(true)}
              onBlur={() => handleFocusManagement(false)}
              {...restProps}
            />

            {suffix}
          </div>

          <span className={labelClasses}>{label}</span>
        </div>
      </label>
    )
  },
)

Input.displayName = COMPONENT_NAME
