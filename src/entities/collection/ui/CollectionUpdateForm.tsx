import { useForm } from 'react-hook-form'
import { Collection, UpdateCollectionForm } from '../types'
import { Input } from 'shared/ui-kit/form-controls/input'
import { TextArea } from 'shared/ui-kit/form-controls/textarea'
import { Button } from 'shared/ui-kit/Button'

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
      <div className="mt-3.5 flex flex-col gap-3.5">
        <Input
          label="slug"
          value={getValues('slug')}
        />

        <Input
          label="name"
          placeholder="Введите name"
          value={getValues('name')}
        />

        <TextArea
          label="name"
          placeholder="Введите description"
          value={getValues('description')}
        />
      </div>

      <div>Goods count: {collection.goodsCount}</div>

      <div>{collection.created_at}</div>
      <div>{collection.updated_at}</div>

      <div>
        <Button type="submit">Изменить</Button>
      </div>
    </form>
  )
}
