import { useParams, useNavigate } from 'react-router-dom'
import {
  useGetCollectionDetails,
  useUpdateCollectionMutation,
} from 'entities/collection/api'
import { UiKitDrawer } from 'shared/ui-kit/drawer'
import { CollectionUpdateForm } from 'entities/collection'
import { UpdateCollectionForm } from 'entities/collection/types'

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
    <UiKitDrawer
      opened={true}
      onClose={handleClose}
    >
      <div>
        <h2>категория: {data?.name}</h2>
      </div>
      {isError && <div>Error</div>}
      {isLoading && <div>Loading...</div>}

      {!isLoading && data && (
        <CollectionUpdateForm
          collection={data}
          onSubmit={handleUpdate}
        />
      )}
    </UiKitDrawer>
  )
}

export default CollectionPage
