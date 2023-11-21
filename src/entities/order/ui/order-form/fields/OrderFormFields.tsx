import { Form, Input } from 'shared/ui-kit'

export const OrderFormFields = () => {
  return (
    <>
      <Form.Field name="payment_status">
        <Input label="payment_status" />
      </Form.Field>

      <Form.Field name="staff">
        <Input label="staff" />
      </Form.Field>
    </>
  )
}
