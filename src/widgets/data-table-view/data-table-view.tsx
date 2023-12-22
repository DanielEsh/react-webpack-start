import { DataTableViewToolbar } from './data-table-view-toolbar'
import { DataTableViewTable } from './data-table-view-table'
import type { SortValues } from 'shared/ui/data-table/use-sort'
import type { ColumnDef } from '@tanstack/react-table'
import type { PageableResponse } from 'shared/api'

interface Props<DATA> {
  data: PageableResponse<DATA>
  columns: ColumnDef<DATA>[]
  sorting: SortValues
  onSortChange(sort: SortValues): void
  onPageChange(currentPage: number): void
  onLimitChange(limit: number): void
}

export const DataTableView = <TData extends unknown | object>(
  props: Props<TData>,
) => {
  const { data, columns, sorting, onSortChange, onLimitChange, onPageChange } =
    props

  return (
    <div>
      <DataTableViewTable
        data={data.content}
        columns={columns}
        sorting={sorting}
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
