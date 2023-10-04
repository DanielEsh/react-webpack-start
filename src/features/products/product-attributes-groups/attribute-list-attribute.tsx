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
  const [values, setValue] = useState<ProductAttribute>(attribute)

  const handleChange = (field: keyof ProductAttribute, value: any) => {
    setValue({
      ...values,
      [field]: value,
    })
    onChange({
      ...values,
      [field]: value,
    })
  }

  return (
    <div className="mb-4 flex w-full justify-between gap-4">
      <BaseSelect
        className="w-[50%]"
        options={selectOptions}
        defaultValue={values.name}
        label="атрибут"
      />

      <Input
        value={values.value}
        label="значение"
        onChange={(e) => handleChange('value', e.target.value)}
      />
    </div>
  )
}
