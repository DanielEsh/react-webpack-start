import { useNavigate } from 'react-router-dom'
import { Modal } from 'shared/ui/Modal'

const CollectionsCreate = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/collections')
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <span>create</span>
    </Modal>
  )
}

export default CollectionsCreate
