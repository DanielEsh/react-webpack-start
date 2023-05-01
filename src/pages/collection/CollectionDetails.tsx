import { useParams, useNavigate } from 'react-router-dom'
import {
  useGetCollectionDetails,
  useUpdateCollectionMutation,
} from 'entities/Collection/api'
import { Modal } from 'shared/ui/Modal'
import { CollectionUpdateForm } from 'entities/Collection'
import { UpdateCollectionForm } from 'entities/Collection/types'

const CollectionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, data } = useGetCollectionDetails(Number(id))
  const { mutate: updateCollection } = useUpdateCollectionMutation()

  const handleClose = () => {
    navigate('/collections')
  }

  const handleSuccessUpdate = () => {
    console.log('SUCCESS UPDATE')
  }

  const handleUpdate = (form: UpdateCollectionForm) => {
    updateCollection(
      {
        form,
        id: Number(id),
      },
      {
        onSuccess: handleSuccessUpdate,
      },
    )
  }

  return (
    <Modal
      opened={true}
      onClose={handleClose}
    >
      <div>id = {id}</div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <CollectionUpdateForm
          collection={data}
          onSubmit={handleUpdate}
        />
      )}
    </Modal>
  )
}

export default CollectionPage
