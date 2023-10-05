import { Button } from 'shared/ui-kit'
import { ProductAttribute } from './types'
import { AttributeListAttribute } from './attribute-list-attribute'
import { AttributeDto } from 'entities/attributes'
import type { BaseSelectOption } from 'shared/ui/base-select'

interface Props {
  attributes: ProductAttribute[]
  attributesOptions?: AttributeDto[]
  onAddClick(): void
  onChange(attributes: ProductAttribute[]): void
}

export const AttributesList = ({
  attributes,
  attributesOptions,
  onAddClick,
  onChange,
}: Props) => {
  const handleChange = (attribute: ProductAttribute, index: number) => {
    const updatedData = [...attributes]

    console.log('update', attribute)

    updatedData[index] = {
      name: attribute.name,
      value: attribute.value,
    }
    onChange(updatedData)
  }

  const handleRemove = (index: number) => {
    const updatedData = [...attributes]
    updatedData.splice(index, 1)
    onChange(updatedData)
  }

  const mappedAttributesOptions = () => {
    if (!attributesOptions) return []

    return attributesOptions.map((attribute) => {
      return {
        label: attribute.name,
        value: attribute.id,
      }
    })
  }

  return (
    <div className="p-4">
      {attributes.map((attribute, index) => (
        <AttributeListAttribute
          key={index}
          attribute={attribute}
          selectOptions={mappedAttributesOptions()}
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
