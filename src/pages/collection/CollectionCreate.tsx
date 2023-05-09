import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Modal } from 'shared/ui-kit/Modal'
import { useCreateCollectionMutation } from 'entities/collection/api'
import { useUpdateCollectionsList } from 'entities/collection'

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const { isLoading: isCreating, mutate: createCollection } =
    useCreateCollectionMutation()

  const { updateCollectionsList } = useUpdateCollectionsList()

  const {
    register,
    getValues,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm()

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
    const form = {
      slug: getValues('slug'),
      name: getValues('exampleRequired'),
    }

    return await createCollection(form, {
      onSuccess: (data) => handleSuccessCreate(data),
      onError: handleErrorCreate,
    })
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <form onSubmit={handleSubmit(createNewCollection)}>
        <div>
          <input
            type="text"
            placeholder="Slug"
            {...register('slug', { required: true })}
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="name"
            {...register('exampleRequired', { required: true })}
          />
        </div>

        {errors.exampleRequired && <span>This field is required</span>}
        {/* {errors.slug && <span>This field is required (slug)</span>} */}
        {errors.slug?.message?.toString()}
        <div>
          <button type="submit">create</button>
          {isCreating && <div>isCreating...</div>}
        </div>
      </form>
    </Modal>
  )
}

export default CollectionsCreate
