import { useGetProducts } from 'entities/products/api'
import { ProductsDataTable } from 'entities/products/ui/data-table/products-data-table'
import { ProductsDataTableHeader } from 'entities/products/ui/data-table/products-data-table-header'
import { Outlet } from 'react-router-dom'

const ProductsPage = () => {
  const { isLoading, isError, data } = useGetProducts({
    page: 1,
    limit: 50,
  })

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <ProductsDataTableHeader />
          <ProductsDataTable data={data.content} />
        </>
      )}

      <Outlet />
    </div>
  )
}

export default ProductsPage
