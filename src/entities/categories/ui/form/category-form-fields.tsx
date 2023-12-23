import { Form } from 'shared/ui-kit/form'
import { Input, TextArea } from 'shared/ui-kit/form-controls'
import { CategoriesFields } from './categories-fields'

export const CategoryFormFields = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Form.Field name={CategoriesFields.slug.name}>
        <Input label={CategoriesFields.slug.label} />
      </Form.Field>
      <Form.Field name={CategoriesFields.name.name}>
        <Input label={CategoriesFields.name.label} />
      </Form.Field>
      <Form.Field name={CategoriesFields.description.name}>
        <TextArea label={CategoriesFields.description.label} />
      </Form.Field>
    </div>
  )
}
