import { useGetWarehouseProductsQuery } from 'entities/warehouse/api/queries/use-get-warehouse-products-query'
interface Props {
  id: number
}

export const WarehouseProductsTable = ({ id }: Props) => {
  const { data } = useGetWarehouseProductsQuery(id)

  return <div>{data?.content.length}</div>
}
