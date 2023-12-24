import { useNavigate, useParams } from 'react-router-dom'
import { useGetCategoryByIdQuery } from 'entities/categories'
import { assertInvariant } from 'shared/api/errors'
import { Button, Drawer } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import {
  CategoryUpdateForm,
  CATEGORY_UPDATE_FORM_ID,
} from 'features/categories/update'

export default function CategoryDetailsPage() {
  const { id } = useParams()
  assertInvariant(id)

  const { isLoading, isError, data } = useGetCategoryByIdQuery(+id)
  const navigate = useNavigate()

  const close = () => {
    navigate('/categories')
  }

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      {isLoading && <div>isLoading...</div>}
      {isError && <div>isError</div>}

      <div className="flex h-full flex-col">
        {data && (
          <>
            <DrawerHeader>
              <h2>Update category</h2>
            </DrawerHeader>

            <CategoryUpdateForm
              id={+id}
              defaultValues={{
                slug: data.slug,
                name: data.name,
                description: data.description,
              }}
            />

            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                  form={CATEGORY_UPDATE_FORM_ID}
                >
                  Обновить
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  onClick={close}
                >
                  Отменить
                </Button>
              </div>
            </DrawerFooter>
          </>
        )}
      </div>
    </Drawer>
  )
}
