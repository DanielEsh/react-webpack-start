import { Input } from 'shared/ui-kit/form-controls'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'shared/ui-kit/form-controls/r-select/r-select'

export const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a verified email to display"></SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="m@example.com">m@example.com</SelectItem>
        <SelectItem value="m@google.com">m@google.com</SelectItem>
        <SelectItem value="m@support.com">m@support.com</SelectItem>
      </SelectContent>
    </Select>
  )
}
