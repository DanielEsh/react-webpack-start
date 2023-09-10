import { SelectBrand } from 'entities/brands/ui/select-brands'
import { Form } from 'shared/ui-kit/form'
import { Input, TextArea } from 'shared/ui-kit/form-controls'

export const ProductFormFields = () => {
  return (
    <div className="flex flex-col gap-4 px-6">
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
        {/* <select>
          <option value="">select</option>
          <option value="1">option 1</option>
          <option value="2">option 2</option>
          <option value="3">option 3</option>
        </select> */}
      </Form.Field>
      <Form.Field name="description">
        <TextArea label="description" />
      </Form.Field>
    </div>
  )
}
