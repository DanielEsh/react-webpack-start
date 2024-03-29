import { Accordion } from 'shared/ui-kit'
import { OrderFormUserDetailsFields } from './fields/order-form-user-details-fields'
import { OrderFormDeliveryDetailsFields } from './fields/order-form-delivery-details-fields'

export const OrderFormAccordion = () => {
  return (
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
            <OrderFormUserDetailsFields />
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
            <OrderFormDeliveryDetailsFields />
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
  )
}
