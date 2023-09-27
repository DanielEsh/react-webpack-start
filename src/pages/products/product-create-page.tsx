import { useNotification } from 'shared/notification'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import {
  productFormSchema,
  useCreateProductMutation,
  useInvalidateProducts,
  type ProductDto,
  ProductFormFields,
} from 'entities/products'
import { ProductForm } from 'entities/products/ui/form/product-form-schema'

const ProductCreatePage = () => {
  const { mutateAsync: createProductMutation } = useCreateProductMutation()
  const { showNotification } = useNotification()
  const invalidateAttributes = useInvalidateProducts()
  const defaultValues: ProductForm = {
    article: '',
    name: '',
    price: 0,
    brandId: 0,
    categoryId: 0,
  }

  const handleSuccessCreate = (data: ProductDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание товара',
      message: `Товар ${data.name} успешно создан`,
    })
    invalidateAttributes()
  }

  const createNewProduct = async (form: ProductForm) => {
    return await createProductMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <FormDrawerLayout
      formSchema={productFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/products"
      submitButtonLabel="Create"
      onSubmit={createNewProduct}
    >
      <ProductFormFields />
    </FormDrawerLayout>
  )
}

export default ProductCreatePage
