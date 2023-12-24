import { useNavigate, useParams } from 'react-router-dom'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { BrandUpdateForm, BRAND_UPDATE_FORM_ID } from 'features/brands/update'
import { assertInvariant } from 'shared/api/errors'
import { useGetBrandDetailsByIdQuery } from 'entities/brands'

export default function BrandDetailsPage() {
  const { id: paramId } = useParams()
  assertInvariant(paramId)
  const id = +paramId

  const { isLoading, isError, data } = useGetBrandDetailsByIdQuery(id)

  const navigate = useNavigate()

  const close = () => {
    navigate('/brands')
  }

  return (
    <Drawer
      open={true}
      onOpenChange={close}
    >
      <>
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}
        {data && (
          <div className="flex h-full flex-col">
            <DrawerHeader>
              <h2>Update brand</h2>
            </DrawerHeader>

            <BrandUpdateForm
              id={id}
              defaultValues={{
                slug: data.slug,
                name: data.name,
                description: data.description,
              }}
              onSuccessUpdate={close}
            />

            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                  form={BRAND_UPDATE_FORM_ID}
                >
                  Обновить
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={close}
                >
                  Отмена
                </Button>
              </div>
            </DrawerFooter>
          </div>
        )}
      </>
    </Drawer>
  )
}
