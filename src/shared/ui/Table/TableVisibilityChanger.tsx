import { useContext } from 'react'
import { Column } from '@tanstack/react-table'
import { TableContext } from 'shared/ui/Table/TableContext'

export const TableVisibilityChanger = () => {
  const { tableInstance, columns } = useContext(TableContext)
  const handleChange = (event: any, column: Column<any, unknown>) => {
    const changeVisibilityColumnFn = column.getToggleVisibilityHandler()
    changeVisibilityColumnFn(event)
  }

  return (
    <div className="inline-block rounded border border-black shadow">
      <div className="border-b border-black px-1">
        <label>
          <input
            {...{
              type: 'checkbox',
              checked: tableInstance?.getIsAllColumnsVisible(),
              onChange: tableInstance?.getToggleAllColumnsVisibilityHandler(),
            }}
          />{' '}
          Toggle All
        </label>
      </div>
      {columns?.map((column) => {
        return (
          <div key={column.id} className="px-1">
            <label>
              <input
                onChange={(event) => handleChange(event, column)}
                {...{
                  type: 'checkbox',
                  checked: column.getIsVisible(),
                }}
              />{' '}
              {column.id}
            </label>
          </div>
        )
      })}
    </div>
  )
}
