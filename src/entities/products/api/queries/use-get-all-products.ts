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

export const useGetProducts = (values?: Values) => {
  // let initPage = 1
  console.log('useGetProducts', values)

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
    queryFn: (page) =>
      getProducts({
        page: page?.pageParam?.page ?? values?.page,
        limit: 2,
      }),
    keepPreviousData: true,
    // onSuccess: (data) => {
    //   initPage = data.pages[0].meta.pagination.links.next
    //   console.log('INIT', initPage)
    // },
    getNextPageParam: (lastPage, pages) => {
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
