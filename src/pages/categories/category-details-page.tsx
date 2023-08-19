import { useParams } from 'react-router-dom'
import {
  useGetCategoryDetails,
  useInvalidateCategories,
  useUpdateCategoryMutation,
} from 'entities/categories/api/queries'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import { useNotification } from 'shared/notification'

const CategoryDetailsPage = () => {
  const { slug } = useParams()
  const { isSuccess, isLoading, isError, data } = useGetCategoryDetails(
    slug || '',
  )
  const { mutateAsync: updateCategoryMutation } = useUpdateCategoryMutation()
  const { invalidateCategories } = useInvalidateCategories()
  const { showNotification } = useNotification()

  const defaultValues: CategoryForm = {
    slug: data?.slug ?? '',
    name: data?.name ?? '',
  }

  const handleSuccessUpdate = (data: any) => {
    showNotification({
      id: data.slug,
      title: 'Успешное обновление категории',
      message: `Категория ${data.name} успешно создана`,
    })
    invalidateCategories()
  }

  const updateCategory = async (form: CategoryForm) => {
    console.log('form', form)
    await updateCategoryMutation(
      {
        form,
        slug: slug || '',
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
