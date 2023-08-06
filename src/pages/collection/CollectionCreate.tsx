import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/drawer'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'
import { z } from 'zod'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { CollectionCreateFormFields } from 'entities/collection/ui/create/collection-create-form-fields'
import { CollectionFormActions } from 'entities/collection/ui/collection-form-actions'

const createCollectionFormSchema = z.object({
  slug: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})

type CreateCollectionFormType = z.infer<typeof createCollectionFormSchema>

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const { isLoading: isCreating, mutate: createCollectionMutation } =
    useCreateCollectionMutation()

  const { updateCollectionsList } = useUpdateCollectionsList()

  const defaultValues: CreateCollectionFormType = {
    slug: '',
    name: '',
  }

  const formMethods = useForm<CreateCollectionFormType>(
    createCollectionFormSchema,
    defaultValues,
  )

  const handleClose = () => {
    navigate('/collections')
  }

  const handleErrorCreate = (data: any) => {
    console.log('ERROR CREATE', data)

    const error = data.response

    if (error.statusText === 'Conflict') {
      formMethods.setError('slug', {
        message: 'Дубликат',
      })
    }
  }

  const handleSuccessCreate = (data: any) => {
    console.log('SUCCESS CREATE', data)
    updateCollectionsList()
    handleClose()
  }

  async function createNewCollection(form: CreateCollectionFormType) {
    return createCollectionMutation(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  return (
    <Drawer
      opened={true}
      onClose={handleClose}
    >
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={createNewCollection}
      >
        <Drawer.Header>
          <h2 className="font-weight-medium text-xl">Create Collection</h2>
        </Drawer.Header>

        <CollectionCreateFormFields />

        <Drawer.Footer>
          <CollectionFormActions
            primaryButtonLabel="Create"
            onCancel={handleClose}
          />
        </Drawer.Footer>
      </Form>
    </Drawer>
  )
}

export default CollectionsCreate
