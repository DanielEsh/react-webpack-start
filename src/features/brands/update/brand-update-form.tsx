import { Form } from 'shared/ui-kit'
import { BrandForm, BrandFormFields, brandFormSchema } from 'entities/brands'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  useInvalidateBrands,
  useUpdateBrandMutation,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'
import { BrandDto } from 'entities/brands/api/types'
import { BRAND_UPDATE_FORM_ID } from './constants'

interface Props {
  id: number
  defaultValues: BrandForm
  onSuccessUpdate(): void
}

export const BrandUpdateForm = ({
  id,
  defaultValues,
  onSuccessUpdate,
}: Props) => {
  const formMethods = useForm(brandFormSchema, defaultValues)
  const { mutateAsync: updateBrandMutation } = useUpdateBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()

  const handleSuccessUpdate = (data: BrandDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление бренда',
      message: `Бренд ${data.name} успешно обновлен`,
    })
    invalidateBrands()
    onSuccessUpdate()
  }

  const handleSubmit = async (form: BrandForm) => {
    await updateBrandMutation(
      {
        form,
        id,
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
  }

  return (
    <Form
      id={BRAND_UPDATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <BrandFormFields />
    </Form>
  )
}
