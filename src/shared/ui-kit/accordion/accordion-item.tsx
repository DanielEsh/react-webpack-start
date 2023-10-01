import {
  forwardRef,
  type ElementRef,
  type ComponentPropsWithoutRef,
} from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { classNames } from 'shared/utils'

const COMPONENT_NAME = 'AccordionItem'

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={classNames('border-b', className)}
    {...props}
  />
))
AccordionItem.displayName = COMPONENT_NAME
