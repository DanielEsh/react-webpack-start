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
    const updatedData = { ...attributes }
    updatedData[index] = attribute
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
