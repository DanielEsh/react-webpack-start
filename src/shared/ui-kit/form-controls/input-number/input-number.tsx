import { forwardRef } from 'react'
import { Input, type InputProps } from '../input/input'

export interface NumberInputProps extends Omit<InputProps, 'onChange'> {
  onChange?(value: number): void
}

const COMPONENT_NAME = 'InputNumber'

export const InputNumber = forwardRef<HTMLInputElement, NumberInputProps>(
  (props, forwardedRef) => {
    const { label, onChange, ...restProps } = props

    const handleInput = (event: any) => {
      const numberValue = +event.target.value
      onChange && onChange(numberValue)
    }

    return (
      <Input
        ref={forwardedRef}
        label={label}
        type="number"
        onInput={handleInput}
        {...restProps}
      />
    )
  },
)

InputNumber.displayName = COMPONENT_NAME
