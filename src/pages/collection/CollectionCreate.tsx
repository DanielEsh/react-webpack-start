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
      <div className="relative px-4 pt-4">
        <h2 className="font-weight-medium text-xl">Create Collection</h2>
        <CloseButton onClick={handleClose} />
      </div>
      <div
        role="none"
        className="my-6 h-[1px] w-full shrink-0 bg-border"
      />

      <Form
        className="flex flex-col"
        methods={formMethods}
        onSubmit={createNewCollection}
      >
        <div className="flex flex-col gap-4 px-4">
          <Form.Field name="slug">
            <Input label="slug" />
          </Form.Field>
          <Form.Field name="name">
            <Input label="name" />
          </Form.Field>
          <Form.Field name="description">
            <TextArea label="description" />
          </Form.Field>
        </div>

        <div
          role="none"
          className="my-6 h-[1px] w-full shrink-0 bg-border"
        />
        <div className="flex gap-2 px-4">
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
      </Form>
    </Drawer>
  )
}

export default CollectionsCreate
