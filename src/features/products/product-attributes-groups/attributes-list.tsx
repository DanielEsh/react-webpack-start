import { Button } from 'shared/ui-kit'
import { ProductAttribute } from './types'

interface Props {
  attributes: ProductAttribute[]
  onAddClick(): void
}

export const AttributesList = ({ attributes, onAddClick }: Props) => {
  return (
    <div className="p-4">
      {attributes.map((attribute, index) => (
        <div
          className="flex w-full gap-[120px]"
          key={index}
        >
          <div>name: {attribute.name}</div>
          <div>value: {attribute.value}</div>
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
