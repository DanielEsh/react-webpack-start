import { useGetBrands } from 'entities/brands/api/queries/useGetBrands'

const BrandsPage = () => {
  const values = {
    currentPage: 1,
    limit: 10,
  }

  const { isLoading, isError, data } = useGetBrands({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <div>
      <pre>
        <code>Breadcrumbs</code>
      </pre>
      <span>Brands</span>
    </div>
  )
}

export default BrandsPage
