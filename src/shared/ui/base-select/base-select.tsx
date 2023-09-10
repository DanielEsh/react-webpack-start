import { Select } from 'shared/ui-kit/form-controls'

export type BaseSelectOption = {
  value: number
  label: string
}

type SelectType = string | number
export interface BaseSelectProps {
  options: BaseSelectOption[]
  label: string
  defaultValue?: SelectType
  onChange?(value: SelectType): void
}

export const BaseSelect = (props: BaseSelectProps) => {
  const { options, defaultValue, label, onChange } = props

  return (
    <Select
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <Select.Trigger>
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
