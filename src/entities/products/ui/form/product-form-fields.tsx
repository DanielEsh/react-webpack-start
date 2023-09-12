import { BrandsSelect } from 'entities/brands/ui/brands-select'
import { CategoriesSelect } from 'entities/categories/ui/categories-select'
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
      <Form.Field name="brandId">
        <BrandsSelect />
      </Form.Field>
      <Form.Field name="categoryId">
        <CategoriesSelect />
      </Form.Field>
      <Form.Field name="description">
        <TextArea label="description" />
      </Form.Field>
    </div>
  )
}
