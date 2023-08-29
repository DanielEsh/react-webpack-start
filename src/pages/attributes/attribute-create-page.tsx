import { useNotification } from 'shared/notification'
import { FormDrawerLayout } from 'widgets/layouts/form-drawer-layout/form-drawer-layout'
import {
  useCreateAttributeMutation,
  useInvalidateAttributes,
  type AttributeDto,
  type AttributeForm,
  AttributeType,
  attributeFormSchema,
  AttributeFormFields,
} from 'entities/attributes'

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
