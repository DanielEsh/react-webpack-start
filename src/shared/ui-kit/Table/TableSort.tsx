import IconArrowUp from 'shared/assets/icons/arrow-up.svg'
import IconArrowDown from 'shared/assets/icons/arrow-down.svg'
import { SortDirection } from '@tanstack/react-table'

interface Props {
  direction: SortDirection | false
}

const Asc = () => <IconArrowUp />

const Desc = () => <IconArrowDown />

export const TableSort = ({ direction }: Props) => {
  return (
    <div className="flex items-center">
      {{
        asc: <Asc />,
        desc: <Desc />,
      }[direction as string] ?? null}
    </div>
  )
}
