import { Select } from 'shared/ui-kit/form-controls'

type ExampleOption = {
  value: number
  label: string
}
export const ExampleSelect = () => {
  const options: ExampleOption[] = [
    {
      value: 1,
      label: 'option1',
    },
    {
      value: 2,
      label: 'option2',
    },
    {
      value: 3,
      label: 'option3',
    },
    {
      value: 4,
      label: 'option4',
    },
    {
      value: 5,
      label: 'option5',
    },
  ]

  return (
    <Select label="label">
      <Select.Value>Pick one</Select.Value>
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
