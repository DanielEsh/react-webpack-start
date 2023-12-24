import { Button, ButtonLink } from 'shared/ui-kit'
import IconPlus from 'shared/assets/icons/plus.svg'
import IconFilter from 'shared/assets/icons/filter.svg'

export const WarehouseTableHeader = () => {
  return (
    <div className="mt-4 mb-2">
      <h1 className="text-2xl">Склад</h1>

      <div className="mt-4 flex justify-between">
        <div className="flex gap-3"></div>

        <div className="flex gap-3">
          <Button addonLeft={<IconFilter className="h-5 w-5" />}>Фильтр</Button>
          <ButtonLink
            to="create"
            variant="primary"
            addonLeft={<IconPlus />}
          >
            <span>Добавить</span>
          </ButtonLink>
        </div>
      </div>
    </div>
  )
}
