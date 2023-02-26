import { ColumnDef } from '@tanstack/react-table'

import { Table } from 'shared/ui/Table'

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

const columns: ColumnDef<Person>[] = [
  {
    id: 'firstName',
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
    size: 40,
    cell: (info) => info.getValue(),
    header: () => <span>Age</span>,
    footer: (props) => props.column.id,
  },
  {
    accessorKey: 'visits',
    id: 'visits',
    size: 40,
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
    size: 40,
    cell: (info) => info.getValue(),
    header: () => <span>progress</span>,
    footer: (props) => props.column.id,
  },
  {
    id: 'actions',
    header: 'Actions',
    minSize: 220,
    footer: (props) => props.column.id,
    cell: ({ row }) => {
      return (
        <div className="flex gap-3">
          <button
            {...{
              style: { cursor: 'pointer' },
              onClick: () => {
                console.log('row', row)
              },
            }}>
            🔵
          </button>
          <button
            {...{
              style: { cursor: 'pointer' },
            }}>
            button 2
          </button>
          <button
            {...{
              style: { cursor: 'pointer' },
            }}>
            button 3
          </button>
        </div>
      )
    },
  },
]

export const DataTable = () => {
  return <Table<Person> defaultData={defaultData} columns={columns} />
}
