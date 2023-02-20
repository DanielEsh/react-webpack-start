import { useState } from 'react'
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table'

import 'shared/ui/Table/table.css'

type Person = {
  firstName: string
  lastName: string
  age: number
  visits: number
  status: string
  progress: number
}

const defaultData: Person[] = [
  {
    firstName: 'tanner',
    lastName: 'linsley',
    age: 24,
    visits: 100,
    status: 'In Relationship',
    progress: 50,
  },
  {
    firstName: 'tandy',
    lastName: 'miller',
    age: 40,
    visits: 40,
    status: 'Single',
    progress: 80,
  },
  {
    firstName: 'joe',
    lastName: 'dirte',
    age: 45,
    visits: 20,
    status: 'Complicated',
    progress: 10,
  },
]

// const columnHelper = createColumnHelper<Person>()

// const columns = [
//   columnHelper.accessor('firstName', {
//     cell: (info) => info.getValue(),
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor((row) => row.lastName, {
//     id: 'lastName',
//     cell: (info) => <i>{info.getValue()}</i>,
//     header: () => <span>Last Name</span>,
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor('age', {
//     header: () => 'Age',
//     cell: (info) => info.renderValue(),
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor('visits', {
//     header: () => <span>Visits</span>,
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor('status', {
//     header: 'Status',
//     footer: (info) => info.column.id,
//   }),
//   columnHelper.accessor('progress', {
//     header: 'Profile Progress',
//     footer: (info) => info.column.id,
//   }),
// ]

const columns: ColumnDef<Person>[] = [
  {
    accessorKey: 'firstName',
    header: 'First Name',
    cell: ({ row, getValue }) => (
      <div
        style={{
          // Since rows are flattened by default,
          // we can use the row.depth property
          // and paddingLeft to visually indicate the depth
          // of the row
          paddingLeft: `${row.depth * 2}rem`,
        }}>
        {getValue<string>()}
      </div>
    ),
    footer: (props) => props.column.id,
  },
  {
    accessorFn: (row) => row.lastName,
    id: 'lastName',
    cell: (info) => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'age',
    id: 'age',
    cell: (info) => info.getValue(),
    header: () => <span>Age</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'visits',
    id: 'visits',
    cell: (info) => info.getValue(),
    header: () => <span>visits</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'status',
    id: 'status',
    cell: (info) => info.getValue(),
    header: () => <span>status</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'progress',
    id: 'progress',
    cell: (info) => info.getValue(),
    header: () => <span>progress</span>,
    footer: (props) => props.column.id,
  },
  {
    header: 'Actions',
    footer: (props) => props.column.id,
    cell: ({ row }) => {
      return (
        <button
          {...{
            style: { cursor: 'pointer' },
          }}>
          '🔵'
        </button>
      )
    },
  },
]

// const columns: ColumnDef<Person>[] = [
//   {
//     header: 'Actions',
//     footer: (props) => props.column.id,
//     columns: [,],
//   },
//   {
//     header: 'Info',
//     footer: (props) => props.column.id,
//     columns: [
//       {
//         accessorKey: 'age',
//         header: () => 'Age',
//         footer: (props) => props.column.id,
//       },
//       {
//         header: 'More Info',
//         columns: [
//           {
//             accessorKey: 'visits',
//             header: () => <span>Visits</span>,
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: 'status',
//             header: 'Status',
//             footer: (props) => props.column.id,
//           },
//           {
//             accessorKey: 'progress',
//             header: 'Profile Progress',
//             footer: (props) => props.column.id,
//           },
//         ],
//       },
//     ],
//   },
// ]

export const Table = () => {
  const [data, setData] = useState(() => [...defaultData])

  const [columnVisibility, setColumnVisibility] = useState({})

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: setColumnVisibility,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroup = table.getHeaderGroups()

  return (
    <div className="p-2">
      <div className="inline-block rounded border border-black shadow">
        <div className="border-b border-black px-1">
          <label>
            <input
              {...{
                type: 'checkbox',
                checked: table.getIsAllColumnsVisible(),
                onChange: table.getToggleAllColumnsVisibilityHandler(),
              }}
            />{' '}
            Toggle All
          </label>
        </div>
        {table.getAllLeafColumns().map((column) => {
          return (
            <div key={column.id} className="px-1">
              <label>
                <input
                  {...{
                    type: 'checkbox',
                    checked: column.getIsVisible(),
                    onChange: column.getToggleVisibilityHandler(),
                  }}
                />{' '}
                {column.id}
              </label>
            </div>
          )
        })}
      </div>

      <table
        {...{
          style: {
            width: table.getCenterTotalSize(),
          },
        }}>
        <thead>
          {headerGroup.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  {...{
                    key: header.id,
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                  className="border border-red-500 bg-slate-400">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  {...{
                    key: cell.id,
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                  className="border border-red-500 bg-yellow-400">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
