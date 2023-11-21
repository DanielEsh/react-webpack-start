import { Form, Input, TextArea } from 'shared/ui-kit'

export const OrderFormUserDetailsFields = () => {
  return (
    <>
      <Form.Field name="user_details.firstName">
        <Input label="firstName" />
      </Form.Field>

      <Form.Field name="user_details.lastName">
        <Input label="lastName" />
      </Form.Field>

      <Form.Field name="user_details.middleName">
        <Input label="middleName" />
      </Form.Field>

      <Form.Field name="user_details.phone">
        <Input label="phone" />
      </Form.Field>

      <Form.Field name="user_details.email">
        <Input label="email" />
      </Form.Field>

      <Form.Field name="user_details.comment">
        <TextArea label="comment" />
      </Form.Field>
    </>
  )
}
