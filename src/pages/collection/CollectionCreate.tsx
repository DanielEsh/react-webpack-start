import { useNavigate } from 'react-router-dom'
import { Modal } from 'shared/ui/Modal'
import { createCollection } from 'shared/api/api'

const CollectionsCreate = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/collections')
  }

  async function createNewCollection() {
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
      <span onClick={createNewCollection}>create</span>
    </Modal>
  )
}

export default CollectionsCreate
