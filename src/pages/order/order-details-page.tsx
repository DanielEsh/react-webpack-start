import { useNavigate, useParams } from 'react-router-dom'
import { Accordion, Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useGetOrderByIdQuery } from 'entities/order/api/queries/use-get-order-by-id-query'
import { OrderUpdateForm } from 'features/order/update/order-update-form'

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
      {isSuccess && (
        <DrawerHeader>
          <h2>Order details</h2>
          <p>number: {data.number}</p>
        </DrawerHeader>
      )}

      {isSuccess && <OrderUpdateForm form={data} />}

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
