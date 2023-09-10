import { Select } from 'shared/ui-kit/form-controls/r-select/r-select'

export const SelectDemo = () => {
  return (
    <Select>
      <Select.Trigger>
        <Select.Value placeholder="Label"></Select.Value>
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="m@example.com">m@example.com</Select.Item>
        <Select.Item value="m@google.com">m@google.com</Select.Item>
        <Select.Item value="m@support.com">m@support.com</Select.Item>
      </Select.Content>
    </Select>
  )
}
