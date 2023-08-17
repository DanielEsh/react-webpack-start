import { DataTable } from 'widgets/data-table'
import { Category } from 'entities/categories/types'
import { columns } from './columns'

interface Props {
  data: Category[]
  onChange?(): void
}

export const CategoriesDataTable = ({ data }: Props) => {
  return (
    <DataTable<Category>
      data={data}
      columns={columns}
    />
  )
}
