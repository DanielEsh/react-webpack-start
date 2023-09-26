import {
  useInfiniteQuery,
  useQuery,
  type InfiniteData,
} from '@tanstack/react-query'
import { getProducts } from '../requests'
import { PageableResponse } from 'shared/api/types'
interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

const flatResponse = <T>(pages: any) => {
  if (!pages) return

  return pages.map((page: any) => page.content).flat()
}

const LIMIT = 2

export const useGetProducts = () => {
  const {
    isLoading,
    isError,
    isFetching,
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['products'],
    queryFn: (page) => {
      return getProducts({
        page: page?.pageParam ?? 1,
        limit: LIMIT,
      })
    },
    keepPreviousData: true,
    getNextPageParam: (lastPage) => {
      return lastPage.meta.pagination.links.next
    },
  })

  return {
    isLoading,
    isError,
    isFetching,
    data: data,
    flattedData: flatResponse(data?.pages),
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  }
}
