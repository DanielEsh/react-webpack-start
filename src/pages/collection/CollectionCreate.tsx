import { useNavigate } from 'react-router-dom'
import { Modal } from 'shared/ui/Modal'
import { createCollection } from 'shared/api/api'

const CollectionsCreate = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/collections')
  }

  async function createNewCollection(event: any) {
    event.preventDefault()

    try {
      const data = await createCollection({
        slug: 'new-slug',
        name: 'new name',
        goodsCount: 0,
      })

      console.log('CREATE', data)
    } catch (e) {
      console.log('CREATE ERROR', e)
    }
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <form onSubmit={createNewCollection}>
        <div>
          <input
            type="text"
            placeholder="Slug"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="name"
          />
        </div>

        <div>
          <button type="submit">create</button>
        </div>
      </form>
    </Modal>
  )
}

export default CollectionsCreate
