import { forwardRef, useEffect, useState } from 'react'
import { BaseSelect } from 'shared/ui/base-select'
import { useGetCategories } from '../api/queries'
import { PageableResponse } from 'shared/api/types'
import { Category } from '../types'

export interface Props {
  value?: number
  onChange?(brandId: number): void
}

interface CategoryOptions {
  value: number
  label: string
}

export const CategoriesSelect = forwardRef<HTMLSelectElement, Props>(
  ({ value, onChange, ...restProps }, forwardedRef) => {
    const [options, setOptions] = useState<CategoryOptions[]>([])

    const success = (data: PageableResponse<Category>) => {
      const options: CategoryOptions[] = data.content.map((brand) => ({
        label: brand.name,
        value: brand.id,
      }))

      setOptions(options)
    }

    useGetCategories(
      {
        page: 1,
        limit: 10,
      },
      success,
    )

    const handleChange = (categoryLabel: string) => {
      const selectedCategoryId = options.find(
        (element) => element.label === categoryLabel,
      )

      if (onChange && selectedCategoryId) onChange(selectedCategoryId.value)
    }

    return (
      <BaseSelect
        label="Select Category"
        options={options}
        defaultValue={value}
        onChange={handleChange}
      />
    )
  },
)
