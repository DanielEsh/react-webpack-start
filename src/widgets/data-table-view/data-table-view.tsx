import { DataTableViewToolbar } from './data-table-view-toolbar'
import { DataTable } from 'shared/ui/data-table/r-data-table'

interface Props {
  data: any
  columns: any
  onSortChange(sort: any): void
  onPageChange(currentPage: number): void
  onLimitChange(limit: number): void
}

export const DataTableView = (props: Props) => {
  const { data, columns, onSortChange, onLimitChange, onPageChange } = props

  return (
    <div>
      <DataTable
        data={data.content}
        columns={columns}
        sorting={{}}
        onSortingChange={onSortChange}
      />

      <DataTableViewToolbar
        totalCount={data.meta.totalItemsCount}
        totalPages={data.meta.pagination.totalPages}
        currentPage={data.meta.pagination.page}
        limitPages={10}
        onLimitChange={onLimitChange}
        onPageChange={onPageChange}
      />
    </div>
  )
}
