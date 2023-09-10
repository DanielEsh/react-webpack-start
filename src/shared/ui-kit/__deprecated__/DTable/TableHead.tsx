import { useContext } from 'react'
import { TableCellHead } from 'shared/ui-kit/__deprecated__/DTable/TableCellHead'
import { TableContext } from 'shared/ui-kit/__deprecated__/DTable/TableContext'

export const TableHead = () => {
  const context = useContext(TableContext)
  const { headerGroups } = context

  return (
    <thead className="[&_tr]:border-b">
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
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
