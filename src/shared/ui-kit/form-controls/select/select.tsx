import { PropsWithChildren, useState } from 'react'
import { Popover } from 'shared/ui-kit/Popover'
import { SelectOptions } from 'shared/ui-kit/form-controls/select/select-options'
import { SelectOption } from 'shared/ui-kit/form-controls/select/select-option'
import { SelectValue } from 'shared/ui-kit/form-controls/select/select-value'
import { SelectLabel } from 'shared/ui-kit/form-controls/select/select-label'
import {
  SelectContext,
  type SelectContextValues,
} from 'shared/ui-kit/form-controls/select/select-context'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'

export interface SelectProps extends PropsWithChildren {
  defaultValue?: SelectType
  label?: string
  readOnly?: boolean
  onChange?: (value: SelectType) => void
}

const COMPONENT_NAME = 'Select'

export const _Select = (props: SelectProps) => {
  const { defaultValue = '', onChange, readOnly, children, label } = props

  const [selectedValue, setSelectedValue] = useState<SelectType>(defaultValue)

  const handleChange = (value: SelectType) => {
    if (readOnly) return

    setSelectedValue(value)
    onChange && onChange(value)
  }

  const contextValue: SelectContextValues = {
    selectedValue,
    changeSelectedValue: handleChange,
    label,
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover
        placement="bottom"
        floatingClosable={false}
      >
        {children}
      </Popover>
    </SelectContext.Provider>
  )
}

export const Select = Object.assign(_Select, {
  Value: SelectValue,
  Options: SelectOptions,
  Option: SelectOption,
  Label: SelectLabel,
})

_Select.displayName = COMPONENT_NAME
