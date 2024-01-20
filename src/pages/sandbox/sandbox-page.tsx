import { Breadcrumbs } from 'shared/ui-kit/breadcrumbs/breadcrumbs'
import { AccordionDemo } from './ui/accordion-demo'
import { DropdownDemo } from 'pages/sandbox/ui/dropdown-demo'
import { NestedDialogDemo } from 'pages/sandbox/ui/nested-dialog-demo'
import { ProductsSelectDemo } from 'pages/sandbox/ui/products-select-demo'
import { CheckboxDemo } from 'pages/sandbox/ui/checkbox-demo'

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

      <div>
        <ProductsSelectDemo />
        <CheckboxDemo />
      </div>
    </div>
  )
}
