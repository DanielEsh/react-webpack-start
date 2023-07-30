import { forwardRef, PropsWithChildren } from 'react'
import { Input } from 'shared/ui-kit/form-controls'
import { Popover } from 'shared/ui-kit/Popover'
import { SelectOptions } from 'shared/ui-kit/form-controls/select/select-options'

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
            <Input
              label="Select"
              readOnly
            />
          </Popover.Trigger>
          <SelectOptions>
            <li>item 1</li>
          </SelectOptions>
        </Popover>
      </div>
    )
  },
)

Select.displayName = COMPONENT_NAME
