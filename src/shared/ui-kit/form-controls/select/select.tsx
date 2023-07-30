import { forwardRef, PropsWithChildren, useState } from 'react'
import { Popover } from 'shared/ui-kit/Popover'
import { SelectOptions } from 'shared/ui-kit/form-controls/select/select-options'
import { SelectOption } from 'shared/ui-kit/form-controls/select/select-option'
import { SelectValue } from 'shared/ui-kit/form-controls/select/select-value'
import {
  SelectContext,
  type SelectContextValues,
} from 'shared/ui-kit/form-controls/select/select-context'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'

interface SelectProps extends PropsWithChildren {
  defaultValue?: SelectType
}

const COMPONENT_NAME = 'Select'

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (props, forwardedRef) => {
    const { defaultValue = '' } = props

    const [selectedValue, setSelectedValue] = useState<SelectType>(defaultValue)

    const handleChange = (value: SelectType) => {
      setSelectedValue(value)
    }

    const contextValue: SelectContextValues = {
      selectedValue,
      changeSelectedValue: handleChange,
    }

    return (
      <SelectContext.Provider value={contextValue}>
        <Popover
          placement="bottom"
          floatingClosable={false}
        >
          <Popover.Trigger>
            <SelectValue>Select value</SelectValue>
          </Popover.Trigger>
          <SelectOptions>
            <SelectOption value="value1">value1</SelectOption>
            <SelectOption
              value="value2"
              disabled
            >
              value2
            </SelectOption>
            <SelectOption value="value3">value3</SelectOption>
          </SelectOptions>
        </Popover>
      </SelectContext.Provider>
    )
  },
)

Select.displayName = COMPONENT_NAME
