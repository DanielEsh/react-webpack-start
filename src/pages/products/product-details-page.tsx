import {
  ProductDto,
  ProductForm,
  ProductFormFields,
  productFormSchema,
  useGetProductsById,
  useInvalidateProducts,
} from 'entities/products'
import { useUpdateProductById } from 'entities/products/api/queries'
import { ProductsAttributesGroupsMain } from 'features/products/product-attributes-groups/products-attributes-groups'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useNotification } from 'shared/notification'
import { Button } from 'shared/ui-kit/button'
import { Drawer } from 'shared/ui-kit/drawer'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { Form } from 'shared/ui-kit/form'
import { useForm } from 'shared/ui-kit/form/use-form'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isSuccess, isLoading, isError, data } = useGetProductsById(id)
  const { mutateAsync: updateProductByIdMutation } = useUpdateProductById()
  const { showNotification } = useNotification()
  const invalidateAttributes = useInvalidateProducts()
  const defaultValues: ProductForm = {
    article: data?.article ?? '',
    name: data?.name ?? '',
    price: data?.price ?? 1,
    brandId: data?.brand.id ?? 0,
    categoryId: data?.category.id ?? 0,
    productAttributesGroups: [],
  }

  const handleSuccessUpdate = (data: ProductDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание товара',
      message: `Товар ${data.name} успешно создан`,
    })
    invalidateAttributes()
  }

  const updateProduct = async (form: ProductForm) => {
    await updateProductByIdMutation(
      {
        form,
        id: id ? +id : 0,
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
    close()
  }

  const close = () => {
    navigate('/products')
  }

  const formMethods = useForm(productFormSchema, defaultValues)

  const { setValue } = formMethods

  useEffect(() => {
    if (data) {
      setValue('article', data.article)
      setValue('name', data.name)
      setValue('price', data.price)
      setValue('brandId', data.brand.id)
      setValue('categoryId', data.category.id)
      setValue('description', data.descriptions)
    }
  }, [data])

  return (
    <Drawer
      open
      onOpenChange={close}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={updateProduct}
      >
        {isLoading && <div>Loading...</div>}
        {isError && <div>Error</div>}

        {isSuccess && (
          <>
            <DrawerHeader>
              <h2>Update product</h2>
            </DrawerHeader>

            <ProductFormFields />
            <ProductsAttributesGroupsMain />

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
          </>
        )}
      </Form>
    </Drawer>
  )
}
