import { useNavigate } from 'react-router-dom'
import { Drawer } from 'shared/ui-kit/Modal/Drawer'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'
import { Input } from 'shared/ui-kit/input'
import { TextArea } from 'shared/ui-kit/textarea'
import { DevTool } from '@hookform/devtools'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'shared/ui-kit/form/use-form'
import { Form } from 'shared/ui-kit/form/form'
import { FormField } from 'shared/ui-kit/form/form-field'
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
    console.log('SUBMIT', form)

    // return await createCollection(form, {
    //   onSuccess: (data) => handleSuccessCreate(data),
    //   onError: handleErrorCreate,
    // })
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
        <FormField name="slug">
          <Input label="slug" />
        </FormField>
        <FormField name="name">
          <Input label="name" />
        </FormField>
        <FormField name="description">
          <TextArea label="description" />
        </FormField>

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
