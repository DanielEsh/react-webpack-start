import { Form, Input } from 'shared/ui-kit'

export const OrderFormDeliveryDetailsFields = () => {
  return (
    <>
      <Form.Field name="delivery_details.country">
        <Input label="Country" />
      </Form.Field>

      <Form.Field name="delivery_details.city">
        <Input label="City" />
      </Form.Field>

      <Form.Field name="delivery_details.street">
        <Input label="Street" />
      </Form.Field>

      <Form.Field name="delivery_details.house">
        <Input label="House" />
      </Form.Field>

      <Form.Field name="delivery_details.building">
        <Input label="Building" />
      </Form.Field>

      <Form.Field name="delivery_details.apartment_office">
        <Input label="ApartmentOffice" />
      </Form.Field>

      <Form.Field name="delivery_details.zip_code">
        <Input label="ZipCode" />
      </Form.Field>
    </>
  )
}
