import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/Modal/Drawer'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'
import { Input, TextArea } from 'shared/ui-kit/form-controls'
import { z } from 'zod'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { Button } from 'shared/ui-kit/Button'
import { CloseButton } from 'shared/ui-kit/Modal/CloseButton'
import { CollectionCreateFormFelds } from "entities/collection/ui/create/collection-create-form-fields";

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
  const { isLoading: isCreating, mutate: createCollection } =
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
    return createCollection(form, {
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
        <div className="relative px-4 pt-4">
          <h2 className="font-weight-medium text-xl">Create Collection</h2>
          <CloseButton onClick={handleClose} />
        </div>
        <div
          role="none"
          className="my-6 h-[1px] w-full shrink-0 bg-border"
        />

        <CollectionCreateFormFelds />

        <div className="mt-auto">
          <div
            role="none"
            className="mb-6 h-[1px] w-full shrink-0 bg-border"
          />
          <div className="flex gap-2 px-4 pb-6">
            <Button
              size="lg"
              variant="primary"
              type="submit"
            >
              Create
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </div>
      </Form>
    </Drawer>
  )
}

export default CollectionsCreate
