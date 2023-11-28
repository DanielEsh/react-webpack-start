import { ButtonLink } from 'shared/ui-kit/button-link'
import IconPlus from 'shared/assets/icons/plus.svg'

export const CategoriesDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2 flex items-center justify-between">
      <h1 className="text-2xl">Категории</h1>

      <div className="flex gap-3">
        <ButtonLink
          to="create"
          variant="primary"
          addonLeft={<IconPlus />}
        >
          <span>Добавить</span>
        </ButtonLink>
      </div>
    </div>
  )
}
