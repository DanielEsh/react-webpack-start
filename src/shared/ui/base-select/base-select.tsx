import { Select } from 'shared/ui-kit/form-controls'

export interface BaseSelectOption {
  value: number
  label: string
}

type SelectType = string | number
export interface BaseSelectProps {
  options: BaseSelectOption[]
  label: string
  defaultValue?: SelectType
  className?: string
  onChange?(value: SelectType): void
}

export const BaseSelect = (props: BaseSelectProps) => {
  const { options, defaultValue, label, className, onChange } = props
  const selectedValue = options.find(
    (element) => element.value === defaultValue,
  )

  return (
    <Select
      defaultValue={selectedValue?.label}
      onChange={onChange}
    >
      <Select.Trigger className={className}>
        <Select.Value placeholder={label}></Select.Value>
      </Select.Trigger>
      <Select.Content>
        {options.length ? (
          options.map(({ value, label }) => (
            <Select.Item
              key={value}
              value={label}
            >
              {label}
            </Select.Item>
          ))
        ) : (
          <div>нет вариантов для выбора</div>
        )}
      </Select.Content>
    </Select>
  )
}
