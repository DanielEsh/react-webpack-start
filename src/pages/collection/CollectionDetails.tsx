import { useContext, useEffect, useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { z } from 'zod'
import { Drawer } from 'shared/ui-kit/drawer'
import { Form } from 'shared/ui-kit/form'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  useGetCollectionDetails,
  useUpdateCollectionMutation,
} from 'entities/collection/api'
import { UpdateCollectionForm } from 'entities/collection/types'
import { useUpdateCollectionsList } from 'entities/collection'
import { CollectionUpdateFormFields } from 'entities/collection/ui/update/collection-update-form-fields'
import { CollectionFormActions } from 'entities/collection/ui/collection-form-actions'
import { NotificationContext } from 'shared/notification'

const updateCollectionFormSchema = z.object({
  slug: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})

type UpdateCollectionFormType = z.infer<typeof updateCollectionFormSchema>

const CollectionPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { isLoading, isError, data } = useGetCollectionDetails(Number(id))
  const { mutate: updateCollection } = useUpdateCollectionMutation()

  const { updateCollectionsList } = useUpdateCollectionsList()
  const { showNotification } = useContext(NotificationContext)

  const defaultValues = useMemo<UpdateCollectionFormType>(() => {
    return {
      slug: data?.slug ?? '',
      name: data?.name ?? '',
      description: data?.description ?? '',
    }
  }, [data])

  const formMethods = useForm<UpdateCollectionFormType>(
    updateCollectionFormSchema,
    defaultValues,
  )

  const { reset } = formMethods

  useEffect(() => {
    reset(data)
  }, [data])

  const handleClose = () => {
    navigate('/collections')
  }

  const handleSuccessUpdate = (data: any) => {
    console.log('SUCCESS UPDATE')
    showNotification({
      id: data.id,
      title: 'Успешное обновление',
      message: `объект ${data.name} успешно создан`,
    })
    updateCollectionsList()
    handleClose()
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
      <Form
        className="flex h-full flex-col"
        methods={formMethods}
        onSubmit={handleUpdate}
      >
        <Drawer.Header>
          <h2>категория: {data?.name}</h2>
          <div>
            <p>Создание</p>
            <p>обновление</p>
          </div>
        </Drawer.Header>

        <div className="px-4">
          {isError && <div>Error</div>}
          {isLoading && <div>Loading...</div>}

          {!isLoading && data && (
            <CollectionUpdateFormFields collection={data} />
          )}
        </div>

        <Drawer.Footer>
          <CollectionFormActions
            primaryButtonLabel="Update"
            onCancel={handleClose}
          />
        </Drawer.Footer>
      </Form>
    </Drawer>
  )
}

export default CollectionPage
