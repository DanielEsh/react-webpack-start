import { ButtonLink } from 'shared/ui-kit/button-link'
import IconPlus from 'shared/assets/icons/plus.svg'

export const ProductsDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Products</h1>

      <div className="flex gap-3">
        <ButtonLink
          to="/products/create"
          addonLeft={<IconPlus />}
        >
          <span>Create</span>
        </ButtonLink>
      </div>
    </div>
  )
}
