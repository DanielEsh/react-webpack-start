import { useState } from 'react'
import { Button, Input } from 'shared/ui-kit'
import { BaseSelect, type BaseSelectOption } from 'shared/ui/base-select'
import { ProductAttribute } from './types'
import IconTrash from 'shared/assets/icons/trash.svg'

interface Props {
  attribute: ProductAttribute
  selectOptions: BaseSelectOption[]
  onChange(attribute: ProductAttribute): void
  onRemove(): void
}

export const AttributesListItem = ({
  attribute,
  selectOptions,
  onChange,
  onRemove,
}: Props) => {
  const [attributeValues, setAttributeValues] =
    useState<ProductAttribute>(attribute)

  const handleChange = (
    field: keyof ProductAttribute,
    value: string | number,
  ) => {
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
          defaultValue={attribute.attributeId}
          label="атрибут"
          onChange={(value) => handleChange('attributeId', value)}
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
