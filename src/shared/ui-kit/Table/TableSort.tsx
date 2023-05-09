import IconArrowUp from 'shared/assets/icons/arrow-up.svg'
import IconArrowDown from 'shared/assets/icons/arrow-down.svg'
import { SortDirection } from '@tanstack/react-table'

interface Props {
  direction: SortDirection | false
}

const Asc = () => (
  <span>
    <IconArrowUp />
  </span>
)

const Desc = () => (
  <span>
    <IconArrowDown />
  </span>
)

export const TableSort = ({ direction }: Props) => {
  return (
    <div>
      {{
        asc: <Asc />,
        desc: <Desc />,
      }[direction as string] ?? null}
    </div>
  )
}
