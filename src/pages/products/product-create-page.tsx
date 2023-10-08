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
import { ProductsAttributesGroupsMain } from 'features/products/product-attributes-groups/products-attributes-groups'
import { ProductAttributesGroup } from 'features/products/product-attributes-groups/types'

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
    attributesGroups: [],
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

  const handleAttributeGroupsChange = (data: ProductAttributesGroup[]) => {
    console.log('CHANGE', data)
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
      <ProductsAttributesGroupsMain
        attributeGroups={defaultValues.attributesGroups}
        onChange={handleAttributeGroupsChange}
      />
    </FormDrawerLayout>
  )
}

export default ProductCreatePage
