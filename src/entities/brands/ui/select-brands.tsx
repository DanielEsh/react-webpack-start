import { BaseSelect } from 'shared/ui/base-select'
import { useGetBrands } from '../api/queries'
import { useEffect, useState } from 'react'

export const SelectBrand = () => {
  const [options, setOptions] = useState<any>([])
  const { isLoading, data } = useGetBrands({
    page: 1,
    limit: 10,
  })

  useEffect(() => {
    if (data?.content.length) {
      const results: any[] = []
      data.content.forEach((item) => {
        results.push({
          label: item.name,
          value: item.id,
        })
      })

      setOptions(results)
    }
  }, [data])

  const handleChange = (value: any) => {
    console.log('change', value)
  }

  return (
    <BaseSelect
      options={options}
      onChange={handleChange}
    />
  )
}
