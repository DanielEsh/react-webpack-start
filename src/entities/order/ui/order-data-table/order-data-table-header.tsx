import { ButtonLink } from 'shared/ui-kit'
import IconPlus from 'shared/assets/icons/plus.svg'

export const OrderDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Orders</h1>

      <div className="flex gap-3">
        <ButtonLink
          to="create"
          addonLeft={<IconPlus />}
        >
          <span>Create</span>
        </ButtonLink>
      </div>
    </div>
  )
}
