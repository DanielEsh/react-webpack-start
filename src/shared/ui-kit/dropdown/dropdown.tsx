import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { TypeWithChildren } from 'shared/ui-kit/types'
import { DropdownTrigger } from './dropdown-trigger'
import { DropdownContent } from './dropdown-content'
import { DropdownItem } from './dropdown-item'

type Props = TypeWithChildren

const _Dropdown = (props: Props) => {
  const { children } = props

  return <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>
}

export const Dropdown = Object.assign(_Dropdown, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
})
