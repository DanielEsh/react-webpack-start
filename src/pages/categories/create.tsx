import {
  useCreateCategoryMutation,
  useUpdateCategories,
} from 'entities/categories/api/queries'
import { useNotification } from 'shared/notification'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'

const CategoryCreatePage = () => {
  const { mutate: createCategoryMutation } = useCreateCategoryMutation()
  const { updateCategories } = useUpdateCategories()
  const { showNotification } = useNotification()

  const defaultValues: CategoryForm = {
    slug: '',
    name: '',
  }

  const createNewCategory = (form: CategoryForm) => {
    return createCategoryMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  function handleSuccessCreate(data: any) {
    showNotification({
      id: data.id,
      title: 'Успешное создание категории',
      message: `Категория ${data.name} успешно создана`,
    })
    updateCategories()
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <FormDrawerLayout
      success={true}
      formSchema={categoryFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/categories"
      onSubmit={createNewCategory}
    >
      <CategoryFormFields />
    </FormDrawerLayout>
  )
}

export default CategoryCreatePage
