import { DataTable } from 'widgets/data-table'
import { DataTableFooterToolbar } from 'widgets/data-table/data-table-footer-toolbar'

interface Meta {
  totalPages: number
}

interface Props<DATA> {
  data: DATA[]
  columns: any
  meta: Meta
}

export const PaginatedDataView = (props: Props<any>) => {
  const { data, columns, meta } = props

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
      />

      <DataTableFooterToolbar totalPages={meta.totalPages} />
    </>
  )
}
