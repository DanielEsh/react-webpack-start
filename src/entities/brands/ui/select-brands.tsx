import { BaseSelect } from 'shared/ui/base-select'
import { useGetBrands } from '../api/queries'
import {
  ChangeEvent,
  SelectHTMLAttributes,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import { Select } from 'shared/ui-kit/form-controls/select'

export type Props = SelectHTMLAttributes<HTMLSelectElement>

export const SelectBrand = forwardRef<HTMLSelectElement, Props>(
  ({ onChange, ...restProps }, forwardedRef) => {
    const [options, setOptions] = useState<any>([])
    const [selected, setSelected] = useState('')
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
      <>
        <Select
          label={'label'}
          onChange={handleChange}
        >
          <Select.Value>Pick one</Select.Value>
          <Select.Options withinPortal={false}>
            {options.map(({ value, label }) => (
              <Select.Option
                key={value}
                value={label}
              >
                {label}
              </Select.Option>
            ))}
          </Select.Options>
        </Select>

        <select
          ref={forwardedRef}
          onChange={handleChange}
          {...restProps}
        >
          <option value="">Select value</option>
          {data?.content.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>
      </>
    )
  },
)
