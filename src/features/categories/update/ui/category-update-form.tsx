import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  CategoryForm,
  CategoryFormFields,
  categoryFormSchema,
  useInvalidateCategories,
  useUpdateCategoryMutation,
} from 'entities/categories'
import { useNotification } from 'shared/notification'
import { CategoryDto } from 'entities/categories/types'
import { CATEGORY_UPDATE_FORM_ID } from 'features/categories/update/ui/constants'

interface Props {
  id: number
  defaultValues: CategoryForm
}

export const CategoryUpdateForm = ({ id, defaultValues }: Props) => {
  const formMethods = useForm(categoryFormSchema, defaultValues)
  const { mutateAsync: updateCategoryMutation } = useUpdateCategoryMutation()
  const invalidateCategories = useInvalidateCategories()
  const { showNotification } = useNotification()

  const handleSuccessUpdate = async (data: CategoryDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление категории',
      message: `Категория ${data.name} успешно создана`,
    })
    await invalidateCategories()
  }

  const handleSubmit = async (form: CategoryForm) => {
    await updateCategoryMutation(
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
      id={CATEGORY_UPDATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <CategoryFormFields />
    </Form>
  )
}
