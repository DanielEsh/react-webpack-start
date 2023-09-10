import * as SelectPrimitive from '@radix-ui/react-select'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'
import { SelectContent } from './select-content'
import { SelectGroup } from './select-group'
import { SelectItem } from './select-item'
import { SelectLabel } from './select-label'

const _Select = SelectPrimitive.Root

export const Select = Object.assign(_Select, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
})
