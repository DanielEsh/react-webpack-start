import { Accordion, Input, TextArea } from 'shared/ui-kit'

export const OrderForm = () => {
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
            <Input label="firstName" />
            <Input label="lastName" />
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
  )
}
