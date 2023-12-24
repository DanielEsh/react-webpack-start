import { Form } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  CategoryForm,
  CategoryFormFields,
  categoryFormSchema,
  useCreateCategoryMutation,
  useInvalidateCategories,
} from 'entities/categories'
import { useNotification } from 'shared/notification'
import { CategoryDto } from 'entities/categories/types'
import { CATEGORY_CREATE_FORM_ID } from './constants'

interface Props {
  onSuccessCreate(): void
}

export const CategoryCreateForm = ({ onSuccessCreate }: Props) => {
  const formMethods = useForm(categoryFormSchema)
  const { mutateAsync: createCategoryMutation } = useCreateCategoryMutation()
  const invalidateCategories = useInvalidateCategories()
  const { showNotification } = useNotification()

  const handleSuccessCreate = async (data: CategoryDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание категории',
      message: `Категория ${data.name} успешно создана`,
    })
    await invalidateCategories()
    onSuccessCreate()
  }

  const handleSubmit = async (form: CategoryForm) => {
    return await createCategoryMutation(form, {
      onSuccess: handleSuccessCreate,
    })
  }

  return (
    <Form
      id={CATEGORY_CREATE_FORM_ID}
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <CategoryFormFields />
    </Form>
  )
}
