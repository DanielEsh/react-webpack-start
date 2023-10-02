import { Button } from 'shared/ui-kit'
import { ProductAttribute } from './types'

interface Props {
  attributes: ProductAttribute[]
  onAddClick(): void
}

export const AttributesList = ({ attributes, onAddClick }: Props) => {
  return (
    <div>
      {attributes.map((attribute, index) => (
        <div key={index}>
          <div>name: {attribute.name}</div>
          <div>value: {attribute.value}</div>
        </div>
      ))}

      <Button
        variant="ghost"
        onClick={onAddClick}
      >
        Связать с атрибутом
      </Button>
    </div>
  )
}
