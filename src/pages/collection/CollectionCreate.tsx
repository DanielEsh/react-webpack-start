import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Modal } from 'shared/ui/Modal'
import { createCollection } from 'shared/api/api'

const CollectionsCreate = () => {
  const navigate = useNavigate()
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleClose = () => {
    navigate('/collections')
  }

  async function createNewCollection() {
    try {
      const data = await createCollection({
        slug: getValues('slug'),
        name: getValues('exampleRequired'),
      })

      console.log('SUCCESS CREATE', data)

      handleClose()
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
        </div>
      </form>
    </Modal>
  )
}

export default CollectionsCreate
