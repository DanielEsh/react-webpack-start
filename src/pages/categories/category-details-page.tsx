import { useParams } from 'react-router-dom'
import { useGetCategoryDetails } from 'entities/categories/api/queries'
import { CategoryFormFields } from 'entities/categories/ui/form/category-form-fields'
import { categoryFormSchema } from 'entities/categories/ui/form/category-form-schema'
import { CategoryForm } from 'entities/categories/ui/form/types'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'

const CategoryDetailsPage = () => {
  const { slug } = useParams()
  const { isSuccess, isLoading, isError, data } = useGetCategoryDetails(
    slug || '',
  )

  const defaultValues: CategoryForm = {
    slug: data?.slug ?? '',
    name: data?.name ?? '',
  }

  const updateCategory = async (form: CategoryForm) => {
    console.log('update', form)
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
