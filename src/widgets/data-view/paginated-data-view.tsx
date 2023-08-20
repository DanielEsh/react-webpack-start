import { type ColumnDef } from '@tanstack/react-table'
import { DataTable } from 'widgets/data-table'
import { DataViewFooterToolbar } from './data-view-footer-toolbar'
import { $dataTableStore, DataTableState } from 'widgets/data-table/model'

interface Meta {
  totalPages: number
}

interface Props<DATA> {
  data: DATA[]
  columns: ColumnDef<DATA>[]
  meta: Meta
  onChange?(state: DataTableState): void
}

export const PaginatedDataView = <DATA extends unknown | object>(
  props: Props<DATA>,
) => {
  const { data, columns, meta, onChange } = props

  const handleChange = () => {
    onChange && onChange($dataTableStore.getState())
  }

  return (
    <>
      <DataTable<DATA>
        data={data}
        columns={columns}
        onChange={handleChange}
      />

      <DataViewFooterToolbar
        totalPages={meta.totalPages}
        onChange={handleChange}
      />
    </>
  )
}
