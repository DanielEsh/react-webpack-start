import { Form, Input } from 'shared/ui-kit'

export const StaffFormFields = () => {
  return (
    <>
      <Form.Field name="first_name">
        <Input label="first_name" />
      </Form.Field>

      <Form.Field name="last_name">
        <Input label="last_name" />
      </Form.Field>

      <Form.Field name="middle_name">
        <Input label="middle_name" />
      </Form.Field>

      <Form.Field name="phone">
        <Input label="phone" />
      </Form.Field>

      <Form.Field name="email">
        <Input label="email" />
      </Form.Field>
    </>
  )
}
