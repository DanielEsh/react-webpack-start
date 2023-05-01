import { useForm } from 'react-hook-form'
import { Collection, UpdateCollectionForm } from '../types'

interface Props {
  collection: Collection
  onSubmit: (form: UpdateCollectionForm) => void
}

export const CollectionUpdateForm = ({ collection, onSubmit }: Props) => {
  const { register, getValues, handleSubmit } = useForm({
    defaultValues: {
      slug: collection.slug,
      name: collection.name,
      description: collection.description,
    },
  })

  const updateCollectionForm = () => {
    const form: UpdateCollectionForm = {
      slug: getValues('slug'),
      name: getValues('name'),
      description: getValues('description'),
    }

    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit(updateCollectionForm)}>
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
          placeholder="Name"
          {...register('name', { required: true })}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Description"
          {...register('description')}
        />
      </div>

      <div>Goods count: {collection.goodsCount}</div>

      <div>{collection.created_at}</div>
      <div>{collection.updated_at}</div>

      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  )
}
