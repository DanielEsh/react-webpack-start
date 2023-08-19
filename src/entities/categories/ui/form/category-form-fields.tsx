import { Form } from 'shared/ui-kit/form'
import { Input, TextArea } from 'shared/ui-kit/form-controls'

export const CategoryFormFields = () => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <Form.Field name="slug">
        <Input label="slug" />
      </Form.Field>
      <Form.Field name="name">
        <Input label="name" />
      </Form.Field>
      <Form.Field name="description">
        <TextArea label="description" />
      </Form.Field>
    </div>
  )
}
