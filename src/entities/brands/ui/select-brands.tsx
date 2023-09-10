import { BaseSelect } from 'shared/ui/base-select'
import { useGetBrands } from '../api/queries'
import {
  ChangeEvent,
  SelectHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react'

export type Props = SelectHTMLAttributes<HTMLSelectElement>

export const SelectBrand = forwardRef<HTMLSelectElement, Props>(
  ({ onChange, ...restProps }, forwardedRef) => {
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

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      if (onChange) onChange(event)
    }

    return (
      <BaseSelect
        label="Select Brand"
        options={options}
      />
    )
  },
)
