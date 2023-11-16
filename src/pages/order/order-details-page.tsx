import { useNavigate, useParams } from 'react-router-dom'
import { Accordion, Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useGetOrderByIdQuery } from 'entities/order/api/queries/use-get-order-by-id-query'
import { AccordionDemo } from 'pages/sandbox/ui/accordion-demo'

export default function OrderDetailsPage() {
  const { id } = useParams<{
    id: string
  }>()

  if (!id) return

  const navigate = useNavigate()
  const { isSuccess, data } = useGetOrderByIdQuery(+id)

  const close = () => {
    navigate('/orders')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <DrawerHeader>
        <h2>Order details</h2>
      </DrawerHeader>

      <div className="p-4">
        <div>status:</div>
        <div>payment_type</div>
        <div>payment_status</div>
        <div>manager:</div>
        <div>warehouse:</div>
      </div>

      {isSuccess && (
        <>
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
                <div className="p-4">
                  <div>firstName: test</div>
                  <div>lastName: test</div>
                  <div>middleName: test</div>
                  <div>phone: {data.user_details.phone}</div>
                  <div>email: {data.user_details.email}</div>
                  <div>guest: test</div>
                  <div>comment: {data.user_details.comment}</div>
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
                <div className="p-4">
                  <div>Country: </div>
                  <div>City: </div>
                  <div>Street: </div>
                  <div>House: </div>
                  <div>Building: </div>
                  <div>ApartmentOffice:</div>
                  <div>ZipCode:</div>
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
        </>
      )}

      <DrawerFooter>
        <div className="flex gap-2 px-4 pb-6">
          <Button
            type="submit"
            variant="primary"
          >
            Update
          </Button>

          <Button
            type="button"
            variant="ghost"
            onClick={close}
          >
            Cancel
          </Button>
        </div>
      </DrawerFooter>
    </Drawer>
  )
}
