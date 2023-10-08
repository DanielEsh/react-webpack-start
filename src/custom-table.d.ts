import { RowData } from '@tanstack/react-table'

declare module '@tanstack/table-core' {
  type EditRowsState = Record<string, boolean>

  interface TableMeta<TData extends RowData> {
    editedRows: EditRowsState
    setEditedRows: any
    removeRow: (removeRowIndex: any) => void
    updateData: (rowIndex: number, columnId: any, value: any) => void
  }
}
