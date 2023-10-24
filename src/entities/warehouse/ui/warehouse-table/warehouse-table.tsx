import { warehouseColumns } from 'entities/warehouse/ui/warehouse-table/warehouse-columns'
import { PaginatedDataView } from 'widgets/data-view'

export const WarehouseTable = () => {
  return (
    <div>
      <PaginatedDataView
        data={[]}
        columns={warehouseColumns}
        meta={{ totalPages: 10 }}
      />
    </div>
  )
}
