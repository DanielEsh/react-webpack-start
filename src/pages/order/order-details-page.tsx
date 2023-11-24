import { useNavigate, useParams } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useGetOrderByIdQuery } from 'entities/order/api/queries/use-get-order-by-id-query'
import { OrderUpdateForm } from 'features/order/update'
import { useChangeOrderMutation } from 'entities/order/api/queries/use-change-order-mutation'

export default function OrderDetailsPage() {
  const { id } = useParams<{
    id: string
  }>()

  if (!id) return

  const navigate = useNavigate()
  const { isSuccess, data } = useGetOrderByIdQuery(+id)
  const { mutateAsync: changeOrderMutation } = useChangeOrderMutation()

  const close = () => {
    navigate('/orders')
  }

  const handleChangeStatus = async () => {
    await changeOrderMutation({
      form: {
        ...data,
        staff: 8,
        status: 'process',
      },
      id: +id,
    })
  }

  const handleChangeStatus2 = async () => {
    await changeOrderMutation({
      form: {
        ...data,
        status: 'delivery',
      },
      id: +id,
    })
  }

  const handleChangeStatus3 = async () => {
    await changeOrderMutation({
      form: {
        ...data,
        status: 'received',
      },
      id: +id,
    })
  }

  const handleChangeStatus4 = async () => {
    await changeOrderMutation({
      form: {
        ...data,
        status: 'completed',
      },
      id: +id,
    })
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

      {isSuccess && (
        <OrderUpdateForm
          data={data}
          onSuccessUpdate={close}
        />
      )}

      {isSuccess && (
        <DrawerFooter>
          <div className="flex gap-2 px-4 pb-6">
            {data.status === 'new' && (
              <Button onClick={handleChangeStatus}>Принять в работу</Button>
            )}

            {data.status === 'process' && (
              <Button onClick={handleChangeStatus2}>To Delivery</Button>
            )}

            {data.status === 'delivery' && (
              <Button onClick={handleChangeStatus3}>Mark as received</Button>
            )}

            {data.status === 'received' && (
              <Button onClick={handleChangeStatus4}>Mark as completed</Button>
            )}

            {data.status === 'completed' && <Button>view invoice</Button>}

            <Button
              type="submit"
              variant="primary"
              form="order-form"
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
      )}
    </Drawer>
  )
}
