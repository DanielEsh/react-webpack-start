import { useParams, useNavigate } from 'react-router-dom'
import { useGetCollectionDetails } from 'entities/Collection/api'
import { Modal } from 'shared/ui/Modal'

const CollectionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, data } = useGetCollectionDetails(Number(id))

  const handleClose = () => {
    navigate('/collections')
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <div>id = {id}</div>
      {isLoading && <div>Loading...</div>}
      {data && (
        <pre>
          <div>Slug: {data.slug}</div>
          <div>Name: {data.name}</div>
        </pre>
      )}
    </Modal>
  )
}

export default CollectionPage
