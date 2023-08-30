import qs from 'qs'
import { useSearchParams } from 'react-router-dom'

export function useSyncWithQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const filter = (values: any) => {
    const notEmptyValuesKeys = Object.keys(values).filter(
      (key) => values[key],
    ) as any[]

    return notEmptyValuesKeys.reduce((result, key) => {
      result[key] = values[key]
      return result
    }, {})
  }

  const setQueryParams = (values: any) => {
    const stringifyValues = qs.stringify(filter(values))
    setSearchParams(stringifyValues)
  }

  const getQueryParams = () => {
    const queryParams: Record<string, string> = {}

    searchParams.forEach((value, key) => {
      queryParams[key] = value
    })

    return queryParams
  }

  return {
    setQueryParams,
    searchParams,
    getQueryParams,
  }
}
