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

type Props = TypeWithChildren

export const _Select = ({ children }: Props) => {
  const [value, setValue] = useState('')

  const contextValue: SelectContextValues = {
    value,
    changeValue: () => setValue,
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <RadixSelectPrimitive.Root
        value={value}
        onValueChange={setValue}
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
