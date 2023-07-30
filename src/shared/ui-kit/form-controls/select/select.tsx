import { forwardRef, PropsWithChildren } from 'react'
import { Menu } from 'shared/ui-kit/Menu'
import { Input } from 'shared/ui-kit/form-controls'
import { Popover } from 'shared/ui-kit/Popover'

type SelectProps = PropsWithChildren

const COMPONENT_NAME = 'Select'

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (props, forwardedRef) => {
    return (
      <div>
        <Popover placement="bottom">
          <Popover.Trigger>
            <Input
              label="Select"
              readOnly
            />
          </Popover.Trigger>
          <Popover.Floating>
            <ul className="flex w-full flex-col bg-amber-500">
              <li>item 1</li>
              <li>item 2</li>
              <li>item 3</li>
            </ul>
          </Popover.Floating>
        </Popover>
      </div>
    )
  },
)

Select.displayName = COMPONENT_NAME
