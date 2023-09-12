import {
  ChangeEvent,
  forwardRef,
  TextareaHTMLAttributes,
  useState,
} from 'react'
import { classNames } from 'shared/utils'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  invalid?: boolean
  className?: string
}

const COMPONENT_NAME = 'TextArea'

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, forwardedRef) => {
    const {
      label,
      className,
      value,
      invalid,
      placeholder,
      onChange,
      ...restProps
    } = props

    const [isFocused, setFocused] = useState(false)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
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
      'flex min-h-[128px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-black focus-visible: focus-visible: disabled:cursor-not-allowed disabled:opacity-50',
      className,
    )

    const labelClasses = classNames(
      'absolute left-3 top-2 bg-white transition-all duration-150 ease-linear',
      {
        ['left-0 top-0 -translate-y-1/2 scale-75 px-2']:
          isFocused || value || placeholder,
        ['text-red-500']: invalid,
      },
    )

    return (
      <label onBlur={() => handleFocusManagement(false)}>
        <div className="relative w-full">
          <textarea
            className={classes}
            ref={forwardedRef}
            value={value}
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

TextArea.displayName = COMPONENT_NAME
