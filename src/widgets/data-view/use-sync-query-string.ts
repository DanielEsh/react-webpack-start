import qs from 'qs'
import { useSearchParams } from 'react-router-dom'

export function useSyncWithQueryParams() {
  const [searchParams, setSearchParams] = useSearchParams()

  const sync = (values: any) => {
    const stringifyValues = qs.stringify(values)
    setSearchParams(stringifyValues)
  }

  return {
    sync,
    searchParams,
  }
}
