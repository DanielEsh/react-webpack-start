import { ButtonLink } from 'shared/ui-kit/button-link'
import IconPlus from 'shared/assets/icons/plus.svg'
import IconFilter from 'shared/assets/icons/filter.svg'
import { Button } from 'shared/ui-kit'

export const CategoriesDataTableHeader = () => {
  return (
    <div className="mt-4 mb-2">
      <h1 className="text-2xl">Категории</h1>
      <p className="w-[600px]">
        Представляет возможность для логической группировки продукции, облегчая
        процесс управления и обработки товаров
      </p>

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
