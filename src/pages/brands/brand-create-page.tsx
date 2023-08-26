import { useNotification } from 'shared/notification'
import {
  type BrandForm,
  brandFormSchema,
  BrandFormFields,
} from 'entities/brands'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import {
  useCreateBrandMutation,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { BrandDto } from 'entities/brands/api/types'

const BrandCreatePage = () => {
  const { mutateAsync: createBrandMutation } = useCreateBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()

  const defaultValues: BrandForm = {
    slug: '',
    name: '',
  }

  const handleSuccessCreate = (data: BrandDto) => {
    showNotification({
      id: String(data.id),
      title: 'Успешное создание бренда',
      message: `Бренд ${data.name} успешно создан`,
    })
    invalidateBrands()
  }

  const createNewBrand = async (form: BrandForm) => {
    return await createBrandMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <FormDrawerLayout
      formSchema={brandFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/brands"
      submitButtonLabel="Create"
      onSubmit={createNewBrand}
    >
      <BrandFormFields />
    </FormDrawerLayout>
  )
}

export default BrandCreatePage
