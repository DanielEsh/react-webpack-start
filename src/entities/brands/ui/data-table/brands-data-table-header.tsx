import { ButtonLink } from 'shared/ui-kit/button-link'
import IconPlus from 'shared/assets/icons/plus.svg'

export const BrandsDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Brands</h1>

      <div className="flex gap-3">
        <ButtonLink
          to="/brands/create"
          addonLeft={<IconPlus />}
        >
          <span>Create</span>
        </ButtonLink>
      </div>
    </div>
  )
}
