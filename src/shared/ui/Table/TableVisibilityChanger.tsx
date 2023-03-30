import { useContext, ChangeEvent } from 'react'
import { Column } from '@tanstack/react-table'
import { TableContext } from 'shared/ui/Table/TableContext'

type BaseData = unknown | object

export const TableVisibilityChanger = <TData extends BaseData>() => {
  const { tableInstance, columns } = useContext(TableContext)
  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    column: Column<TData, unknown>,
  ) => {
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
          <div
            key={column.id}
            className="px-1"
          >
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
