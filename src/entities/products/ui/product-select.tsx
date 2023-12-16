import { BaseSelect } from 'shared/ui/base-select'
import { useState } from 'react'
import { ProductDto, useGetProducts } from 'entities/products'
import { PageableResponse } from 'shared/api'

interface Props {
  value?: number
  onChange?(productId: number): void
}

interface Options {
  value: number
  label: string
}

export const ProductSelect = (props: Props) => {
  const { value, onChange } = props
  const [options, setOptions] = useState<Options[]>([])

  const success = (data: PageableResponse<ProductDto>) => {
    const options: Options[] = data.pages[0].content.map((product) => ({
      label: product.name,
      value: product.id,
    }))

    setOptions(options)
  }

  useGetProducts({ onSuccess: success })

  const handleChange = (categoryLabel: string) => {
    const selectedProductId = options.find(
      (element) => element.label === categoryLabel,
    )

    if (onChange && selectedProductId) onChange(selectedProductId.value)
  }

  return (
    <BaseSelect
      label="Select Product"
      options={options}
      defaultValue={value}
      onChange={handleChange}
    />
  )
}
