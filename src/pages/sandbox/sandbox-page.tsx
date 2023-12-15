import { Breadcrumbs } from 'shared/ui-kit/breadcrumbs/breadcrumbs'
import { AccordionDemo } from './ui/accordion-demo'
import { DropdownDemo } from 'pages/sandbox/ui/dropdown-demo'
import { NestedDialogDemo } from 'pages/sandbox/ui/nested-dialog-demo'

export default function SandBoxPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>SandBox</Breadcrumbs.Item>
      </Breadcrumbs>

      <AccordionDemo />

      <div>
        <div>Dropdown</div>
        <DropdownDemo />
      </div>

      <div>
        <div>Nested Dialog</div>
        <NestedDialogDemo />
      </div>
    </div>
  )
}
