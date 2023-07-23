import { useContext } from 'react'
import { TableCellHead } from 'shared/ui-kit/Table/TableCellHead'
import { TableContext } from 'shared/ui-kit/Table/TableContext'

export const TableHead = () => {
  const context = useContext(TableContext)
  const { headerGroups } = context

  return (
    <thead className="[&_tr]:border-b">
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors"
          >
            {headerGroup.headers.map((header) => (
              <TableCellHead
                key={header.id}
                header={header}
              />
            ))}
          </tr>
        ))}
    </thead>
  )
}
