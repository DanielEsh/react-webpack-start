import { Collection, UpdateCollectionForm } from '../types'
import { Input } from 'shared/ui-kit/form-controls/input'
import { TextArea } from 'shared/ui-kit/form-controls/textarea'
import { Form } from 'shared/ui-kit/form'

interface Props {
  collection: Collection
  onSubmit: (form: UpdateCollectionForm) => void
}

export const CollectionUpdateForm = ({ collection }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <Form.Field name="slug">
        <Input label="slug" />
      </Form.Field>
      <Form.Field name="name">
        <Input label="name" />
      </Form.Field>
      <Form.Field name="description">
        <TextArea label="description" />
      </Form.Field>

      <div>Goods count: {collection.goodsCount}</div>
    </div>
  )
}
