import { useState } from 'react'
import { Button, Input } from 'shared/ui-kit'
import { BaseSelect } from 'shared/ui/base-select'
import { ProductAttribute } from './types'
import IconTrash from 'shared/assets/icons/trash.svg'

interface Props {
  attribute: ProductAttribute
  selectOptions: any
  onChange(attribute: ProductAttribute): void
  onRemove(): void
}

export const AttributeListAttribute = ({
  attribute,
  selectOptions,
  onChange,
  onRemove,
}: Props) => {
  const [attributeValues, setAttributeValues] =
    useState<ProductAttribute>(attribute)

  const handleChange = (field: keyof ProductAttribute, value: any) => {
    const updatedAttributeValues = {
      ...attributeValues,
      [field]: value,
    }

    setAttributeValues(updatedAttributeValues)
    onChange(updatedAttributeValues)
  }

  return (
    <div className="mb-4 flex w-full items-center gap-4">
      <div className="flex w-full justify-between gap-4">
        <BaseSelect
          className="w-[50%]"
          options={selectOptions}
          defaultValue={attributeValues.name}
          label="атрибут"
          onChange={(e) => handleChange('name', e)}
        />

        <Input
          value={attributeValues.value}
          label="значение"
          onChange={(e) => handleChange('value', e.target.value)}
        />
      </div>

      <Button
        variant="ghost"
        onClick={onRemove}
      >
        <IconTrash />
      </Button>
    </div>
  )
}
