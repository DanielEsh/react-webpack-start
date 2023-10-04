import { Button } from 'shared/ui-kit'
import { ProductAttribute } from './types'
import { AttributeListAttribute } from './attribute-list-attribute'

interface Props {
  attributes: ProductAttribute[]
  onAddClick(): void
  onChange(attributes: ProductAttribute[]): void
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

export const AttributesList = ({ attributes, onAddClick, onChange }: Props) => {
  const handleChange = (attribute: ProductAttribute, index: number) => {
    const updatedData = [...attributes]
    updatedData[index] = {
      name: attribute.name,
      value: attribute.value,
    }
    onChange(updatedData)
  }

  console.log('ATTRIBUTES', attributes)

  const handleRemove = (index: number) => {
    const updatedData = [...attributes]
    updatedData.splice(index, 1)
    onChange(updatedData)
  }

  return (
    <div className="p-4">
      {attributes.map((attribute, index) => (
        <AttributeListAttribute
          key={index}
          attribute={attribute}
          selectOptions={options}
          onChange={(attribute) => handleChange(attribute, index)}
          onRemove={() => handleRemove(index)}
        />
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
