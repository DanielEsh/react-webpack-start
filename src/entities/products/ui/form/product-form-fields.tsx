import { SelectBrand } from 'entities/brands/ui/select-brands'
import { Form } from 'shared/ui-kit/form'
import { Input, TextArea } from 'shared/ui-kit/form-controls'

export const ProductFormFields = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Form.Field name="article">
        <Input label="article" />
      </Form.Field>
      <Form.Field name="name">
        <Input label="name" />
      </Form.Field>
      <Form.Field name="price">
        <Input label="price" />
      </Form.Field>
      <Form.Field name="brand">
        <SelectBrand />
      </Form.Field>
      <Form.Field name="description">
        <TextArea label="description" />
      </Form.Field>
    </div>
  )
}
