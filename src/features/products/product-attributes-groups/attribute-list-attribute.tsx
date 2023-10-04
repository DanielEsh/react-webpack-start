import { useState } from 'react'
import { Input } from 'shared/ui-kit'
import { BaseSelect } from 'shared/ui/base-select'
import { ProductAttribute } from './types'

interface Props {
  attribute: ProductAttribute
  selectOptions: any
  onChange(attribute: ProductAttribute): void
}

export const AttributeListAttribute = ({
  attribute,
  selectOptions,
  onChange,
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
    <div className="mb-4 flex w-full justify-between gap-4">
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
  )
}
