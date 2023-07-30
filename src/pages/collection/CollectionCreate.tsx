import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/Modal/Drawer'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'
import { Input, TextArea } from 'shared/ui-kit/form-controls'
import { z } from 'zod'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { Button } from 'shared/ui-kit/Button'

const createCollectionFormSchema = z.object({
  slug: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})

type createCollectionFormType = z.infer<typeof createCollectionFormSchema>

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const { isLoading: isCreating, mutate: createCollection } =
    useCreateCollectionMutation()

  const { updateCollectionsList } = useUpdateCollectionsList()

  const defaultValues: createCollectionFormType = {
    slug: '',
    name: '',
    description: '',
  }

  const formMethods = useForm(createCollectionFormSchema, defaultValues)

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

  async function createNewCollection(form: createCollectionFormType) {
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
        className="mt-12 flex flex-col gap-2"
        methods={formMethods}
        onSubmit={createNewCollection}
      >
        <Form.Field name="slug">
          <Input label="slug" />
        </Form.Field>
        <Form.Field name="name">
          <Input label="name" />
        </Form.Field>
        <Form.Field name="description">
          <TextArea label="description" />
        </Form.Field>

        <div>
          <Button
            variant="primary"
            type="submit"
          >
            Create
          </Button>
        </div>
      </Form>
    </Drawer>
  )
}

export default CollectionsCreate
