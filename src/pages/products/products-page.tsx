import { useGetProducts } from 'entities/products/api'
import { ProductsDataTable } from 'entities/products/ui/data-table/products-data-table'
import { ProductsDataTableHeader } from 'entities/products/ui/data-table/products-data-table-header'

const ProductsPage = () => {
  const { isLoading, isError, data } = useGetProducts({
    page: 1,
    limit: 10,
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
    </div>
  )
}

export default ProductsPage
