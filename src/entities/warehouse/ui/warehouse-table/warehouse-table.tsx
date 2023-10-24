import { warehouseColumns } from './warehouse-columns'
import { PaginatedDataView } from 'widgets/data-view'
import { WarehouseTableHeader } from './warehouse-table-header'

export const WarehouseTable = () => {
  return (
    <div>
      <WarehouseTableHeader />

      <PaginatedDataView
        data={[]}
        columns={warehouseColumns}
        meta={{ totalPages: 10 }}
      />
    </div>
  )
}
