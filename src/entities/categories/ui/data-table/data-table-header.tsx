import { Link } from 'shared/ui-kit/link'
import IconPlus from 'shared/assets/icons/plus.svg'

export const CategoriesDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Categories</h1>

      <div className="flex gap-3">
        <Link
          to="create"
          addonLeft={<IconPlus />}
        >
          <span>Create</span>
        </Link>
      </div>
    </div>
  )
}
