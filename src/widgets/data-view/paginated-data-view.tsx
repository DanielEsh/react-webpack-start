import { DataTable } from 'widgets/data-table'
import { DataTableFooterToolbar } from 'widgets/data-table/data-table-footer-toolbar'
import { $dataTableStore } from 'widgets/data-table/model'

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

  const handleChange = () => {
    console.log('Values', $dataTableStore.getState())
  }

  return (
    <>
      <DataTable
        data={data}
        columns={columns}
        onChange={handleChange}
      />

      <DataTableFooterToolbar
        totalPages={meta.totalPages}
        onChange={handleChange}
      />
    </>
  )
}
