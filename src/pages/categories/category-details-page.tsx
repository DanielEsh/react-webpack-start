import { useParams } from 'react-router-dom'
import {
  useGetCategoryByIdQuery,
  useInvalidateCategories,
  useUpdateCategoryMutation,
} from 'entities/categories'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import { useNotification } from 'shared/notification'

const CategoryDetailsPage = () => {
  const { id } = useParams()

  if (!id) {
    throw Error('')
  }

  const { isSuccess, isLoading, isError, data } = useGetCategoryByIdQuery(+id)
  const { mutateAsync: updateCategoryMutation } = useUpdateCategoryMutation()
  const invalidateCategories = useInvalidateCategories()
  const { showNotification } = useNotification()

  const defaultValues: CategoryForm = {
    slug: data?.slug ?? '',
    name: data?.name ?? '',
  }

  const handleSuccessUpdate = async (data: any) => {
    showNotification({
      id: data.slug,
      title: 'Успешное обновление категории',
      message: `Категория ${data.name} успешно создана`,
    })
    await invalidateCategories()
  }

  const updateCategory = async (form: CategoryForm) => {
    await updateCategoryMutation(
      {
        form,
        id: +id,
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
  }

  return (
    <FormDrawerLayout
      loading={isLoading}
      error={isError}
      success={isSuccess}
      data={data}
      formSchema={categoryFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/categories"
      submitButtonLabel="Update"
      onSubmit={updateCategory}
    >
      <CategoryFormFields />
    </FormDrawerLayout>
  )
}

export default CategoryDetailsPage
