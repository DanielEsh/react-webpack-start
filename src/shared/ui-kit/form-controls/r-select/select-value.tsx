import {
  forwardRef,
  type ElementRef,
  ComponentPropsWithoutRef,
  useContext,
} from 'react'
import * as RadixSelectPrimitive from '@radix-ui/react-select'
import { Input } from '../input'
import ChevronDownIcon from 'shared/assets/icons/chevron-down.svg'
import { SelectContext } from './select-context'

export const SelectValue = forwardRef<
  ElementRef<typeof RadixSelectPrimitive.Content>,
  ComponentPropsWithoutRef<typeof RadixSelectPrimitive.Content>
>(({ placeholder = '' }, ref) => {
  const { value } = useContext(SelectContext)

  return (
    <RadixSelectPrimitive.Value
      ref={ref}
      asChild
    >
      <Input
        label={placeholder}
        value={value}
        suffix={<ChevronDownIcon className="h-4 w-4" />}
      />
    </RadixSelectPrimitive.Value>
  )
})
