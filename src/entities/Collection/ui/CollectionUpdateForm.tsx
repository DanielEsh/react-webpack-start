import { useForm } from 'react-hook-form'
import { Collection, UpdateCollectionForm } from '../types'

interface Props {
  collection: Collection
}

export const CollectionUpdateForm = ({ collection }: Props) => {
  const { register, getValues, handleSubmit, reset } = useForm()

  reset({
    slug: collection.slug,
    name: collection.name,
    description: collection.description,
  })

  const updateCollection = () => {
    const form: UpdateCollectionForm = {
      slug: getValues('slug'),
      name: getValues('name'),
      description: getValues('description'),
    }

    console.log('FORM', form)
  }

  return (
    <form onSubmit={handleSubmit(updateCollection)}>
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
          {...register('description', { required: true })}
        />
      </div>

      <div>Goods count: {collection.goodsCount}</div>

      <div>{collection.created_at}</div>
      <div>{collection.updated_at}</div>
    </form>
  )
}
