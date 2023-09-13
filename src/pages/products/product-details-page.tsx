import {
  ProductDto,
  ProductForm,
  ProductFormFields,
  productFormSchema,
  useGetProductsById,
  useInvalidateProducts,
} from 'entities/products'
import { useUpdateProductById } from 'entities/products/api/queries'
import { useParams } from 'react-router-dom'
import { useNotification } from 'shared/notification'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'

export default function ProductDetailsPage() {
  const { id } = useParams()
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
    brandId: data?.brand.id,
    categoryId: data?.category.id,
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
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <FormDrawerLayout
      loading={isLoading}
      error={isError}
      success={isSuccess}
      data={data}
      formSchema={productFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/products"
      submitButtonLabel="Update"
      onSubmit={updateProduct}
    >
      <ProductFormFields />
    </FormDrawerLayout>
  )
}
