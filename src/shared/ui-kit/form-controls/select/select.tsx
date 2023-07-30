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
          <Popover.Floating>
            <ul className="flex w-full min-w-[238px] flex-col rounded-md bg-blue-500 p-2">
              <li className="bg-amber-500">item 1</li>
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
