import { useGetBrands } from 'entities/brands/api/queries/useGetBrands'
import { BrandsDataTable } from 'entities/brands/ui/data-table/brands-data-table'
import { BrandsDataTableHeader } from 'entities/brands/ui/data-table/brands-data-table-header'
import { DataTableState } from 'widgets/data-table/model'

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

  const handleChange = (state: DataTableState) => {
    console.log('values', state)
    // setQueryParams(state)
  }

  return (
    <div>
      <pre>
        <code>Breadcrumbs</code>
      </pre>

      <BrandsDataTableHeader />

      {isError && <div>Error...</div>}
      {isLoading && <div>Loading...</div>}
      {data && (
        <BrandsDataTable
          data={data?.content}
          totalPages={data.meta.pagination.totalPages}
          onChange={handleChange}
        />
      )}
    </div>
  )
}

export default BrandsPage
