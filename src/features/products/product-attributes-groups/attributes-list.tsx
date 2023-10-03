import { Button, Input } from 'shared/ui-kit'
import { BaseSelect } from 'shared/ui/base-select'
import { ProductAttribute } from './types'

interface Props {
  attributes: ProductAttribute[]
  onAddClick(): void
}

const options = [
  {
    label: '1',
    value: 1,
  },
  {
    label: '2',
    value: 2,
  },
]

export const AttributesList = ({ attributes, onAddClick }: Props) => {
  return (
    <div className="p-4">
      {attributes.map((attribute, index) => (
        <div
          className="mb-4 flex w-full justify-between gap-4"
          key={index}
        >
          <BaseSelect
            className="w-[50%]"
            options={options}
            label="атрибут"
          />

          <Input label="значение" />
        </div>
      ))}

      <Button
        size="xs"
        onClick={onAddClick}
      >
        Связать с атрибутом
      </Button>
    </div>
  )
}
