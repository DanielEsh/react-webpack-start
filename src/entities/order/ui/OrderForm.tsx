import { Accordion, Button, Form, Input, TextArea } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  orderFormSchema,
  type OrderFormSchema,
} from 'entities/order/ui/order-form/order-form-schema'

export const OrderForm = () => {
  const orderFormDefaultValues: OrderFormSchema = {
    staff: 'staff',
    status: 'status',
    payment_status: 'payment_status',
    warehouse: 'warehouse',
    user_details: {
      firstName: '',
      lastName: 'lastName',
      middleName: 'middleName',
      email: 'email',
      phone: 'phone',
      comment: 'comment',
    },
    delivery_details: {
      city: 'city',
      country: 'country',
      zip_code: 'zip_code',
      street: 'street',
      house: 'house',
      building: 'building',
      apartment_office: 'apartment_office',
    },
  }

  const methods = useForm(orderFormSchema, orderFormDefaultValues)

  const handleSubmit = (form: OrderFormSchema) => {
    console.log('submit', form)
  }

  return (
    <Form
      id="order-form"
      methods={methods}
      onSubmit={handleSubmit}
    >
      <Accordion
        type="multiple"
        className="w-full"
        defaultValue={['userDetails', 'deliveryDetails']}
      >
        <Accordion.Item value="userDetails">
          <div className="p-4">
            <Accordion.Trigger>
              <h2>User details</h2>
            </Accordion.Trigger>
          </div>

          <Accordion.Content>
            <div className="flex flex-col gap-4 p-4">
              <Form.Field name="user_details.firstName">
                <Input label="firstName" />
              </Form.Field>

              <Form.Field name="user_details.lastName">
                <Input label="lastName" />
              </Form.Field>

              <Input label="middleName" />
              <Input label="phone" />
              <Input label="email" />
              <div>guest: test</div>
              <TextArea label="comment" />
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="deliveryDetails">
          <div className="p-4">
            <Accordion.Trigger>
              <h2>delivery details</h2>
            </Accordion.Trigger>
          </div>
          <Accordion.Content>
            <div className="flex flex-col gap-4 p-4">
              <Input label="Country" />
              <Input label="City" />
              <Input label="Street" />
              <Input label="House" />
              <Input label="Building" />
              <Input label="ApartmentOffice" />
              <Input label="ZipCode" />
            </div>
          </Accordion.Content>
        </Accordion.Item>

        <Accordion.Item value="orderProducts">
          <div className="p-4">
            <Accordion.Trigger>
              <h2>products</h2>
            </Accordion.Trigger>
          </div>
          <Accordion.Content>
            <div className="p-4">ProductsTable</div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </Form>
  )
}
