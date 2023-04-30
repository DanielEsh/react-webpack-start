import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Modal } from 'shared/ui/Modal'
import { useCreateCollection } from 'entities/Collection/api'
import { useQueryClient } from '@tanstack/react-query'

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const { isLoading: isCreating, mutate: createCollection } =
    useCreateCollection()

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const queryClient = useQueryClient()

  const handleClose = () => {
    navigate('/collections')
  }

  const handleSuccessCreate = (data: any) => {
    console.log('SUCCESS CREATE', data)
    queryClient.invalidateQueries({ queryKey: ['collections'] })

    handleClose()
  }

  async function createNewCollection() {
    try {
      const form = {
        slug: getValues('slug'),
        name: getValues('exampleRequired'),
      }

      return await createCollection(form, {
        onSuccess: (data) => handleSuccessCreate(data),
      })
    } catch (e) {
      console.log('CREATE ERROR', e)
    }
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
        {errors.slug && <span>This field is required (slug)</span>}
        <div>
          <button type="submit">create</button>
          {isCreating && <div>isCreating...</div>}
        </div>
      </form>
    </Modal>
  )
}

export default CollectionsCreate
