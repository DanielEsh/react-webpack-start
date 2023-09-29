import { PropsWithChildren } from 'react'
import { Popover } from 'shared/ui-kit/__deprecated__/Popover'
import { SelectOptions } from 'shared/ui-kit/form-controls/select/select-options'
import { SelectOption } from 'shared/ui-kit/form-controls/select/select-option'
import { SelectValue } from 'shared/ui-kit/form-controls/select/select-value'
import { SelectLabel } from 'shared/ui-kit/form-controls/select/select-label'
import {
  SelectContext,
  type SelectContextValues,
} from 'shared/ui-kit/form-controls/select/select-context'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'
import { useUncontrolled } from 'shared/lib/hooks/use-uncontrolled'

export interface SelectProps<Value> extends PropsWithChildren {
  defaultValue?: SelectType
  value?: Value
  label?: string
  readOnly?: boolean
  onChange?: (value: SelectType) => void
}

const COMPONENT_NAME = 'Select'

export const _Select = <Value extends SelectType>(
  props: SelectProps<Value>,
) => {
  const {
    defaultValue = '',
    value: externalValue,
    onChange,
    readOnly,
    children,
    label,
  } = props

  const [internalValue, handleInternalValueChange, isControlled] =
    useUncontrolled({
      value: externalValue,
      defaultValue,
      finalValue: null,
      onChange,
    })

  const handleChange = (value: SelectType) => {
    if (readOnly) return

    if (!isControlled) {
      handleInternalValueChange(value)
      return
    }

    onChange && onChange(value)
  }

  const contextValue: SelectContextValues = {
    selectedValue: internalValue as SelectType,
    changeSelectedValue: handleChange,
    label,
  }

  return (
    <SelectContext.Provider value={contextValue}>
      <Popover placement="bottom">{children}</Popover>
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
