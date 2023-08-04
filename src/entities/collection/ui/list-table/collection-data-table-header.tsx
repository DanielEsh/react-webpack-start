import { Link } from 'react-router-dom'
import IconPlus from 'shared/assets/icons/plus.svg'

export const CollectionsDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Collections</h1>

      <div className="flex gap-3">
        <Link
          to="create"
          className="flex gap-2"
        >
          <IconPlus /> <span>Create Button</span>
        </Link>
      </div>
    </div>
  )
}
