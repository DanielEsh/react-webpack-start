import { Form, Input } from 'shared/ui-kit'

export const OrderUpdateFields = () => {
  return (
    <>
      <Form.Field name="status">
        <Input label="status" />
      </Form.Field>

      <Form.Field name="payment_status">
        <Input label="payment_status" />
      </Form.Field>

      <Form.Field name="staff">
        <Input label="staff" />
      </Form.Field>
    </>
  )
}
