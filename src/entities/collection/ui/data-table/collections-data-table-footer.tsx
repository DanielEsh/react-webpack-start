import { Pagiantion } from 'shared/ui-kit/Pagiantion/Pagination'
import { BaseSelect, BaseSelectOption } from 'shared/ui/base-select'
import { DataTablePageCounter } from 'shared/ui/data-table/data-table-page-counter'
import {
  $collectionTableStore,
  setCollectionTableValues,
  type RowsPerPagesValues,
} from 'entities/collection/model'
import { useStore } from 'effector-react'

interface Props {
  totalPages: number
  onChange: () => void
}

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

export const CollectionsDataTableFooter = ({ totalPages, onChange }: Props) => {
  const { currentPage, limit } = useStore($collectionTableStore)

  const handleLimitChange = (limit: number | string) => {
    setCollectionTableValues({
      limit: Number(limit) as RowsPerPagesValues,
    })
    onChange()
  }

  const handleCurrentPageChange = (currentPage: number) => {
    setCollectionTableValues({
      currentPage: currentPage,
    })
    onChange()
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
            defaultValue={String(limit)}
            options={rowsPerPageOptions}
            onChange={handleLimitChange}
          />
        </div>
        {totalPages > 1 && (
          <>
            <DataTablePageCounter
              totalPages={totalPages}
              currentPage={currentPage ?? 1}
            />

            <Pagiantion
              totalPages={totalPages}
              currentPage={currentPage ?? 1}
              onChange={handleCurrentPageChange}
            />
          </>
        )}
      </div>
    </div>
  )
}
