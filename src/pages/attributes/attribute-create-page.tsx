import { useNotification } from 'shared/notification'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import { useCreateAttributeMutation } from 'entities/attributes/api/queries/use-create-attribute-mutation'
import { useInvalidateAttributes } from 'entities/attributes/api/queries/use-invalidate-attributes'
import { AttributeDto } from 'entities/attributes/api/types'
import { AttributeForm } from 'entities/attributes/ui/form/types'
import { attributeFormSchema } from 'entities/attributes/ui/form/attribute-form-schema'
import { AttributeFormFields } from 'entities/attributes/ui/form/attribute-form-fields'
import { AttributeType } from 'entities/attributes/types'

const AttributeCreatePage = () => {
  const { mutateAsync: createAttributeMutation } = useCreateAttributeMutation()
  const { showNotification } = useNotification()
  const invalidateAttributes = useInvalidateAttributes()
  const defaultValues: AttributeForm = {
    name: '',
    type: AttributeType.String,
  }

  const handleSuccessCreate = (data: AttributeDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное создание атрибута',
      message: `Атрибут ${data.name} успешно создан`,
    })
    invalidateAttributes()
  }

  const createNewAttribute = async (form: AttributeForm) => {
    return await createAttributeMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  function handleErrorCreate() {
    console.log('error')
  }

  return (
    <FormDrawerLayout
      formSchema={attributeFormSchema}
      defaultValues={defaultValues}
      backLinkPath="/attributes"
      submitButtonLabel="Create"
      onSubmit={createNewAttribute}
    >
      <AttributeFormFields />
    </FormDrawerLayout>
  )
}

export default AttributeCreatePage
