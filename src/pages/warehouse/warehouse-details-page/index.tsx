import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetWarehouseByIdQuery } from 'entities/warehouse/api/queries'
import { WarehouseProductsTable } from 'features/warehouse/warehouse-products'
import { assertInvariant } from 'shared/api/errors'
import {
  WAREHOUSE_UPDATE_FORM_ID,
  WarehouseUpdateForm,
} from 'features/warehouse/update'

export default function WarehouseDetailsPage() {
  const { id: paramId } = useParams<{
    id: string
  }>()

  assertInvariant(paramId)
  const id = +paramId

  const navigate = useNavigate()

  const { isLoading, isSuccess, isError, data } = useGetWarehouseByIdQuery(id)

  const close = () => {
    navigate('/warehouses')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <div className="flex h-full flex-col">
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}

        {isSuccess && (
          <>
            <DrawerHeader>
              <h2>Update warehouse</h2>
            </DrawerHeader>

            <div className="flex flex-col gap-4 px-6">
              <WarehouseUpdateForm
                id={id}
                defaultValues={{ name: data.name }}
                onSuccessUpdate={close}
              />

              <WarehouseProductsTable id={+id} />
            </div>

            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                  form={WAREHOUSE_UPDATE_FORM_ID}
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
          </>
        )}
      </div>
    </Drawer>
  )
}
