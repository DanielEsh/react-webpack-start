import { useGetProducts } from 'entities/products/api'

const ProductsPage = () => {
  const { isLoading, isError, data } = useGetProducts({
    page: 1,
    limit: 10,
  })

  return (
    <div>
      {isLoading && <div>Loading</div>}
      {isError && <div>Error</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default ProductsPage
