import { useNotification } from 'shared/notification'
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
import { Button, Drawer, Form } from 'shared/ui-kit'
import { DrawerHeader } from 'shared/ui-kit/drawer/drawer-header'
import { DrawerFooter } from 'shared/ui-kit/drawer/drawer-footer'
import { useForm } from 'shared/ui-kit/form/use-form'
import { useNavigate } from 'react-router-dom'

const ProductCreatePage = () => {
  const navigate = useNavigate()
  const { mutateAsync: createProductMutation } = useCreateProductMutation()
  const { showNotification } = useNotification()
  const invalidateAttributes = useInvalidateProducts()
  const defaultValues: ProductForm = {
    article: '',
    name: '',
    price: 0,
    brandId: 0,
    categoryId: 0,
    attributeGroup: [],
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

  const formMethods = useForm(productFormSchema, defaultValues)

  const { reset, formState, setValue } = formMethods

  const close = () => {
    navigate('/products')
  }

  const handleSubmit = async (form: any) => {
    await createNewProduct(form)
    close()
  }

  const handleAttributeGroupsChange = (data: ProductAttributesGroup[]) => {
    console.log('CHANGE', data)
    setValue('attributeGroup', data)
  }

  return (
    <>
      <Drawer
        open
        onOpenChange={close}
      >
        <Form
          className="flex h-full flex-col"
          methods={formMethods}
          onSubmit={handleSubmit}
        >
          <>
            <DrawerHeader>
              <h2>Create product</h2>
            </DrawerHeader>
            <ProductFormFields />
            <ProductsAttributesGroupsMain
              attributeGroups={defaultValues.attributeGroup}
              onChange={handleAttributeGroupsChange}
            />
            <DrawerFooter>
              <div className="flex gap-2 px-4 pb-6">
                <Button
                  type="submit"
                  variant="primary"
                >
                  Create
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
        </Form>
      </Drawer>
    </>
  )
}

export default ProductCreatePage
