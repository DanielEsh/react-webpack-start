import { useParams, useNavigate } from 'react-router-dom'
import {
  useGetCollectionDetails,
  useUpdateCollectionMutation,
} from 'entities/collection/api'
import { Drawer } from 'shared/ui-kit/Modal/Drawer'
import { CollectionUpdateForm } from 'entities/collection'
import { Collection, UpdateCollectionForm } from 'entities/collection/types'

const CollectionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, isError, data } = useGetCollectionDetails(Number(id))
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
    <Drawer
      opened={true}
      onClose={handleClose}
    >
      <div>id = {id}</div>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}

      {!isLoading && data && (
        <CollectionUpdateForm
          collection={data}
          onSubmit={handleUpdate}
        />
      )}
    </Drawer>
  )
}

export default CollectionPage
