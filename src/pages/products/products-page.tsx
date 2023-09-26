import {
  ProductDto,
  useDeleteProductMutation,
  useGetProducts,
  useInvalidateProducts,
} from 'entities/products/api'
import { ProductsDataTable } from 'entities/products/ui/data-table/products-data-table'
import { ProductsDataTableHeader } from 'entities/products/ui/data-table/products-data-table-header'
import { Outlet } from 'react-router-dom'
import { useNotification } from 'shared/notification'
import { DeleteState } from 'shared/ui/dialog/confirm-delete'

const ProductsPage = () => {
  const {
    isLoading,
    isError,
    isFetching,
    data,
    flattedData,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetProducts()

  const { mutate: deleteProductMutation } = useDeleteProductMutation()
  const invalidateProducts = useInvalidateProducts()
  const { showNotification } = useNotification()

  const handleSuccessCategoryDelete = (data: ProductDto) => {
    console.log('success delete', data)
    showNotification({
      id: '0',
      title: 'Успешное удаление',
      message: `message`,
    })
    invalidateProducts()
  }

  const handleDelete = (data: DeleteState<number, ProductDto>) => {
    deleteProductMutation(data.key, {
      onSuccess: handleSuccessCategoryDelete,
    })
  }

  const handleNextFetch = () => {
    console.log('FETCH NEXT')

    if (!hasNextPage) {
      console.log('EMPTY')
      return
    }

    fetchNextPage()
  }

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <ProductsDataTableHeader />
          <ProductsDataTable
            data={flattedData}
            onDelete={handleDelete}
            onEndReached={handleNextFetch}
          />

          <button onClick={handleNextFetch}>next</button>
          <div>isFetchingNextPage: {JSON.stringify(isFetchingNextPage)}</div>
          <div>hasNextPage: {JSON.stringify(hasNextPage)}</div>
          <div>
            Status: {isFetching && !isFetchingNextPage ? 'Fetching...' : null}
          </div>
        </>
      )}

      <Outlet />
    </div>
  )
}

export default ProductsPage
