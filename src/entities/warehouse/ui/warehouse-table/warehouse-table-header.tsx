import { Link } from 'shared/ui-kit'
import IconPlus from 'shared/assets/icons/plus.svg'

export const WarehouseTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Warehouse</h1>

      <div className="flex gap-3">
        <Link
          to="/warehouses/create"
          addonLeft={<IconPlus />}
        >
          Create
        </Link>
      </div>
    </div>
  )
}
