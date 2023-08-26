import { useParams } from 'react-router-dom'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import { useNotification } from 'shared/notification'
import {
  useGetBrandDetailsBySlug,
  useInvalidateBrands,
  useUpdateBrandMutation,
} from 'entities/brands/api/queries'
import { BrandForm, BrandFormFields, brandFormSchema } from 'entities/brands'
import { BrandDto } from 'entities/brands/api/types'

const BrandDetailsPage = () => {
  const { slug } = useParams()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isSuccess, isLoading, isError, data } = useGetBrandDetailsBySlug(slug)
  const { mutateAsync: updateBrandMutation } = useUpdateBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()

  const defaultValues: BrandForm = {
    slug: data?.slug ?? '',
    name: data?.name ?? '',
  }

  const handleSuccessUpdate = (data: BrandDto) => {
    showNotification({
      id: data.slug,
      title: 'Успешное обновление бренда',
      message: `Бренд ${data.name} успешно обновлен`,
    })
    invalidateBrands()
  }

  const updateCategory = async (form: BrandForm) => {
    await updateBrandMutation(
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
      formSchema={brandFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/brands"
      submitButtonLabel="Update"
      onSubmit={updateCategory}
    >
      <BrandFormFields />
    </FormDrawerLayout>
  )
}

export default BrandDetailsPage
