import { Row } from '@tanstack/react-table'
import { OrderDto } from 'entities/order/api/dto'
import { Link } from 'shared/ui-kit'
import IconEdit from 'shared/assets/icons/edit.svg'

interface Props {
  row: Row<OrderDto>
}

export const OrderDataTableRowActions = ({ row }: Props) => {
  const { original } = row

  return (
    <div className="flex justify-end gap-1">
      <Link
        size="sm"
        to={`/orders/${original.id}`}
      >
        <IconEdit />
      </Link>
    </div>
  )
}
