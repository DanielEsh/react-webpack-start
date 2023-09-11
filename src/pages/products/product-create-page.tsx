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

const AttributeCreatePage = () => {
  const { mutateAsync: createAttributeMutation } = useCreateProductMutation()
  const { showNotification } = useNotification()
  const invalidateAttributes = useInvalidateProducts()
  const defaultValues: ProductForm = {
    article: 'article',
    name: 'name',
    price: 1,
    brand: 5,
    category: 10,
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
    console.log('FORM', form)
    // return await createAttributeMutation(form, {
    //   onSuccess: (data) => handleSuccessCreate(data),
    //   onError: handleErrorCreate,
    // })
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

export default AttributeCreatePage
