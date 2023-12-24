import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  type BrandForm,
  BrandFormFields,
  brandFormSchema,
} from 'entities/brands'
import {
  useCreateBrandMutation,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'
import { BrandDto } from 'entities/brands/api/types'
import { BRAND_CREATE_FORM_ID } from './constants'

interface Props {
  onSuccessCreate(): void
}

export const BrandsCreateForm = ({ onSuccessCreate }: Props) => {
  const { mutateAsync: createBrandMutation } = useCreateBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()
  const formMethods = useForm(brandFormSchema)

  const handleSuccessCreate = (data: BrandDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание бренда',
      message: `Бренд ${data.name} успешно создан`,
    })
    invalidateBrands()
    onSuccessCreate()
  }

  const handleSubmit = async (form: BrandForm) => {
    return await createBrandMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
    })
  }

  return (
    <Form
      id={BRAND_CREATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <BrandFormFields />
    </Form>
  )
}
