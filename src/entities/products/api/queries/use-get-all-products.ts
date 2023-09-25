import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { getProducts } from '../requests'
import { PageableResponse } from 'shared/api/types'
interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

// const flatResponse = <T>(pages: PageableResponse<T>) => {
//   return pages.content.map(page =>)
// }

export const useGetProducts = (values: Values) => {
  const {
    isLoading,
    isError,
    isFetching,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products', values],
    queryFn: () => getProducts(values),
    keepPreviousData: true,
    getNextPageParam: (lastPage, pages) => {
      return false
    },
  })

  console.log('DATA', data)

  return {
    isLoading,
    isError,
    isFetching,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  }
}
