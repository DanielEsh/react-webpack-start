import { ButtonLink } from 'shared/ui-kit'
import IconPlus from 'shared/assets/icons/plus.svg'

export const StaffDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Staff</h1>

      <div className="flex gap-3">
        <ButtonLink
          to="/staff/create"
          addonLeft={<IconPlus />}
        >
          Create
        </ButtonLink>
      </div>
    </div>
  )
}
