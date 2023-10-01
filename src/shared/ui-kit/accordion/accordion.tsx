import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { AccordionItem } from './accordion-item'
import { AccordionTrigger } from './accordion-trigger'
import { AccordionContent } from './accordion-content'

const AccordionRoot = AccordionPrimitive.Root

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
})
