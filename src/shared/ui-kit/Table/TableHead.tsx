import { useContext } from 'react'
import { TableCellHead } from 'shared/ui/Table/TableCellHead'
import { TableContext } from 'shared/ui/Table/TableContext'

export const TableHead = () => {
  const context = useContext(TableContext)
  const { headerGroups } = context

  return (
    <thead>
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="border-b border-slate-300 bg-slate-100"
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
