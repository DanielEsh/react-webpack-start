import { forwardRef, PropsWithChildren } from 'react'
import { Input } from 'shared/ui-kit/form-controls'
import { Popover } from 'shared/ui-kit/Popover'
import { SelectOptions } from 'shared/ui-kit/form-controls/select/select-options'
import { SelectOption } from 'shared/ui-kit/form-controls/select/select-option'
import { SelectValue } from 'shared/ui-kit/form-controls/select/select-value'

type SelectProps = PropsWithChildren

const COMPONENT_NAME = 'Select'

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (props, forwardedRef) => {
    return (
      <div>
        <Popover
          placement="bottom"
          floatingClosable={false}
        >
          <Popover.Trigger>
            <SelectValue />
          </Popover.Trigger>
          <SelectOptions>
            <SelectOption value="value1">value1</SelectOption>
            <SelectOption value="value2">value2</SelectOption>
            <SelectOption value="value3">value3</SelectOption>
          </SelectOptions>
        </Popover>
      </div>
    )
  },
)

Select.displayName = COMPONENT_NAME
