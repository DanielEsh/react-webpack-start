import qs from 'qs'
import { useSearchParams } from 'react-router-dom'

export function useSyncWithQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const setQueryParams = (values: any) => {
    const stringifyValues = qs.stringify(values)
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
