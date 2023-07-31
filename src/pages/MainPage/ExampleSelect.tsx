import { Select } from 'shared/ui-kit/form-controls'

export const ExampleSelect = () => {
  return (
    <Select>
      <Select.Value>Pick one</Select.Value>
      <Select.Options>
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
        <Select.Option value="option3">Option 3</Select.Option>
        <Select.Option value="option4">Option 4</Select.Option>
        <Select.Option value="option5">Option 5</Select.Option>
      </Select.Options>
    </Select>
  )
}
