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
  const { isLoading, isError, data } = useGetProducts({
    page: 1,
    limit: 50,
  })

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

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data && (
        <>
          <ProductsDataTableHeader />
          <ProductsDataTable
            data={data.content}
            onDelete={handleDelete}
          />
        </>
      )}

      <Outlet />
    </div>
  )
}

export default ProductsPage
