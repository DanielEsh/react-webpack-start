import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import {
  $collectionTableStore,
  setCollectionTableValues,
  type RowsPerPagesValues,
} from 'entities/collection/model'
import { useStore } from 'effector-react'

const rowsPerPageOptions: BaseSelectOption[] = [
  {
    value: 5,
    label: '5',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 25,
    label: '25',
  },
]

export const CollectionDataTableFooter = () => {
  const { currentPage, limit, totalPages } = useStore($collectionTableStore)

  const handleLimitChange = (limit: number | string) => {
    setCollectionTableValues({
      limit: Number(limit) as RowsPerPagesValues,
    })
  }

  const handleCurrentPageChange = (currentPage: number) => {
    setCollectionTableValues({
      currentPage: currentPage,
    })
  }

  return (
    <div className="mt-6 flex items-center justify-between px-2">
      <div className="flex-1 text-sm text-muted-foreground">
        0 of 100 row(s) selected.
      </div>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">Rows per page</p>
          <BaseSelect
            defaultValue={limit}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
          />
        </div>
        <DataTablePageCounter
          totalPages={totalPages ?? 0}
          currentPage={currentPage ?? 1}
        />

        <Pagiantion
          totalPages={totalPages ?? 0}
          currentPage={currentPage ?? 1}
          onChange={handleCurrentPageChange}
        />
      </div>
    </div>
  )
}
