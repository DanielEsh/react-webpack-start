import { useState } from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { TypeWithChildren } from 'shared/ui-kit/types'
import { SelectContext, type SelectContextValues } from './select-context'
import { SelectTrigger } from './select-trigger'
import { SelectValue } from './select-value'
import { SelectContent } from './select-content'
import { SelectGroup } from './select-group'
import { SelectItem } from './select-item'
import { SelectLabel } from './select-label'
import type { SelectType } from './types'
interface Props extends TypeWithChildren {
  defaultValue?: SelectType
  onChange?(value: SelectType): void
}

export const _Select = (props: Props) => {
  const { children, defaultValue = '', onChange } = props

  const [value, setValue] = useState<SelectType>(defaultValue)

  const contextValue: SelectContextValues = {
    value: String(value || defaultValue),
    changeValue: () => setValue,
  }

  const handleChange = (value: SelectType) => {
    setValue(value)
    onChange && onChange(value)
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <RadixSelectPrimitive.Root
        value={String(value || defaultValue)}
        onValueChange={handleChange}
      >
        {children}
      </RadixSelectPrimitive.Root>
    </SelectContext.Provider>
  )
}

export const Select = Object.assign(_Select, {
  Trigger: SelectTrigger,
  Value: SelectValue,
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
})
