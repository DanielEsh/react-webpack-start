import { forwardRef, useEffect, useState } from 'react'
import { BaseSelect } from 'shared/ui/base-select'
import { useGetBrands } from '../api/queries'
import { PageableResponse } from 'shared/api/types'
import { BrandDto } from '../api/types'

export interface Props {
  value?: number
  onChange?(brandId: number): void
}

interface BrandOptions {
  value: number
  label: string
}

export const BrandsSelect = forwardRef<HTMLSelectElement, Props>(
  ({ value, onChange, ...restProps }, forwardedRef) => {
    const [options, setOptions] = useState<BrandOptions[]>([])
    const [selectedValue, setSelectedValue] = useState('')

    const success = (data: PageableResponse<BrandDto>) => {
      const options: BrandOptions[] = data.content.map((brand) => ({
        label: brand.name,
        value: brand.id,
      }))

      setOptions(options)
    }

    useGetBrands(
      {
        page: 1,
        limit: 10,
      },
      success,
    )

    useEffect(() => {
      if (value) {
        const selectedBrandId = options.find(
          (element) => element.value === value,
        )
        setSelectedValue(selectedBrandId?.label)
      }
    }, [value, options])

    const handleChange = (brandLabel: string) => {
      const selectedBrandId = options.find(
        (element) => element.label === brandLabel,
      )

      if (onChange && selectedBrandId) onChange(selectedBrandId.value)
    }

    return (
      <BaseSelect
        label="Select Brand"
        defaultValue={selectedValue}
        options={options}
        onChange={handleChange}
      />
    )
  },
)
