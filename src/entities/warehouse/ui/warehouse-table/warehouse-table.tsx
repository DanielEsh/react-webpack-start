import { warehouseColumns } from './warehouse-columns'
import { PaginatedDataView } from 'widgets/data-view'
import { WarehouseTableHeader } from './warehouse-table-header'
import { useGetWarehouses } from 'entities/warehouse/api/queries/use-get-warehouses'

export const WarehouseTable = () => {
  const { data } = useGetWarehouses({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <div>
      <WarehouseTableHeader />

      <PaginatedDataView
        data={data?.content ?? []}
        columns={warehouseColumns}
        meta={{ totalPages: 10 }}
      />
    </div>
  )
}
