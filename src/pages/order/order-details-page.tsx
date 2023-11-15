import { useNavigate, useParams } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useGetOrderByIdQuery } from 'entities/order/api/queries/use-get-order-by-id-query'

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

      <div className="p-4">orders</div>

      {isSuccess && (
        <>
          <div>
            <h2>User Data</h2>
            <div>name: {data.user_details.name}</div>
            <div>name: {data.user_details.phone}</div>
            <div>name: {data.user_details.email}</div>
            <div>name: {data.user_details.comment}</div>
          </div>
          <div>
            <h2>Delivery Data</h2>
            <div>city:</div>
            <div>street:</div>
            <div>house:</div>
            <div>building:</div>
            <div>ApartmentOffice:</div>
            <div>index:</div>
          </div>
          <div>
            <h2>Products List</h2>
          </div>
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
