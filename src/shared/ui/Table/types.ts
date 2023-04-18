import type { Header } from '@tanstack/react-table'

export type BaseTableData = unknown | object

export type TableSort = {
  name: string
  type: 'desc' | 'asc'
} | null

export type TableExternalData = any
export type TableExternalValue = unknown

export type TableHeaderType = Header<TableExternalData, TableExternalValue>
