import { useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { Drawer } from 'shared/ui-kit/Modal/Drawer'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'
import { Input } from 'shared/ui-kit/input'
import { TextArea } from 'shared/ui-kit/textarea'
import { DevTool } from '@hookform/devtools'

interface CreateCollectionFormFields {
  slug?: string
  name?: string
  description?: string
}

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const { isLoading: isCreating, mutate: createCollection } =
    useCreateCollectionMutation()

  const { updateCollectionsList } = useUpdateCollectionsList()

  const defaultValues: CreateCollectionFormFields = {
    slug: undefined,
    name: undefined,
    description: undefined,
  }

  const {
    control,
    register,
    getValues,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<CreateCollectionFormFields>({
    defaultValues,
  })

  const handleClose = () => {
    navigate('/collections')
  }

  const handleErrorCreate = (data: any) => {
    console.log('ERROR CREATE', data)

    const error = data.response

    if (error.statusText === 'Conflict') {
      setError('slug', {
        message: 'Дубликат',
      })
    }
  }

  const handleSuccessCreate = (data: any) => {
    console.log('SUCCESS CREATE', data)
    updateCollectionsList()
    handleClose()
  }

  async function createNewCollection() {
    const form: CreateCollectionFormFields = {
      slug: getValues('slug'),
      name: getValues('name'),
    }

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
      <form onSubmit={handleSubmit(createNewCollection)}>
        <div>
          <div>
            <div>
              <Controller
                render={({ field }) => (
                  <Input
                    label="slug"
                    required
                    {...field}
                  />
                )}
                control={control}
                rules={{ required: 'Slug is required' }}
                name="slug"
              />

              <div>{errors.slug?.message}</div>
            </div>

            <div>
              <Controller
                render={({ field }) => (
                  <Input
                    label="name"
                    required
                    {...field}
                  />
                )}
                control={control}
                rules={{ required: 'Name is required' }}
                name="name"
              />

              <div>{errors.name?.message}</div>
            </div>

            <div>
              <Controller
                render={({ field }) => (
                  <TextArea
                    label="description"
                    {...field}
                  />
                )}
                control={control}
                name="description"
              />

              <div>{errors.description?.message}</div>
            </div>
          </div>
        </div>

        <div>
          <button type="submit">create</button>
          {isCreating && <div>isCreating...</div>}
        </div>

        <DevTool control={control} />
      </form>
    </Drawer>
  )
}

export default CollectionsCreate
