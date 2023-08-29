import { useParams } from 'react-router-dom'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import { useNotification } from 'shared/notification'
import { useUpdateAttributeMutatuin } from 'entities/attributes/api/queries/use-update-attribute-mutation'
import { useGetAttributeById } from 'entities/attributes/api/queries/use-get-attribute-by-id'
import { useInvalidateAttributes } from 'entities/attributes/api/queries/use-invalidate-attributes'
import { AttributeDto } from 'entities/attributes/api/types'
import { AttributeForm } from 'entities/attributes/ui/form/types'
import { attributeFormSchema } from 'entities/attributes/ui/form/attribute-form-schema'
import { AttributeFormFields } from 'entities/attributes/ui/form/attribute-form-fields'
import { AttributeType } from 'entities/attributes/types'
const AttributeDetailsPage = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isSuccess, isLoading, isError, data } = useGetAttributeById(id)
  const { mutateAsync: updateAttributeMutation } = useUpdateAttributeMutatuin()
  const invalidateAttributes = useInvalidateAttributes()
  const { showNotification } = useNotification()

  const defaultValues: AttributeForm = {
    name: data?.name ?? '',
    type: data?.type ?? AttributeType.String,
  }

  const handleSuccessUpdate = (data: AttributeDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное обновление атрибута',
      message: `Атрибут ${data.name} успешно обновлен`,
    })
    invalidateAttributes()
  }

  const updateAttribute = async (form: AttributeForm) => {
    await updateAttributeMutation(
      {
        form,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        id: id,
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
      formSchema={attributeFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/attributes"
      submitButtonLabel="Update"
      onSubmit={updateAttribute}
    >
      <AttributeFormFields />
    </FormDrawerLayout>
  )
}

export default AttributeDetailsPage
