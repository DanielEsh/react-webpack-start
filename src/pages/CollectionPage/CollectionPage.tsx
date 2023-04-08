import { useParams, useNavigate } from 'react-router-dom'
import { Modal } from 'shared/ui/Modal'

const CollectionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleClose = () => {
    navigate('/collections')
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <div>id = {id}</div>
    </Modal>
  )
}

export default CollectionPage
