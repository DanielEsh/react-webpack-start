import { Select, SelectProps } from 'shared/ui-kit/form-controls'

export type BaseSelectOption = {
  value: number
  label: string
}

export interface BaseSelectProps
  extends Pick<SelectProps, 'defaultValue' | 'label' | 'onChange'> {
  options: BaseSelectOption[]
}

export const BaseSelect = (props: BaseSelectProps) => {
  const { options, defaultValue, label, onChange } = props

  return (
    <Select
      label={label}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <Select.Value className="h-8 w-[70px]">Pick one</Select.Value>
      <Select.Options>
        {options.map(({ value, label }) => (
          <Select.Option
            key={value}
            value={label}
          >
            {label}
          </Select.Option>
        ))}
      </Select.Options>
    </Select>
  )
}
