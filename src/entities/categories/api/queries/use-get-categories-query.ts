import { PageableResponse, PageableResponseParams } from 'shared/api'
import { Category } from 'entities/categories/types'
import { useQuery } from '@tanstack/react-query'
import { getCategories } from 'entities/categories/api/requests'

export const useGetCategories = (
  values: PageableResponseParams,
  onSuccess?: (data: PageableResponse<Category>) => void,
) => {
  return useQuery({
    queryKey: ['categories', values],
    queryFn: () => getCategories(values),
    keepPreviousData: true,
    onSuccess: (data) => {
      onSuccess && onSuccess(data)
    },
  })
}
