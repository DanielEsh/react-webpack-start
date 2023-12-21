import { useGetCategories } from 'entities/categories/api/queries'

export const RCategoriesDataTable = () => {
  const { isLoading, isError, data } = useGetCategories({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {data && <pre>{JSON.stringify(data.content, null, 2)}</pre>}
    </>
  )
}
