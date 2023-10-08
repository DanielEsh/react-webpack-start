import { ProductAttributesGroupsTable } from './data-table'
import { ProductAttributesGroup } from './types'

interface Props {
  attributeGroups: ProductAttributesGroup[]
  onChange(attributeGroups: ProductAttributesGroup[]): void
}

export const ProductsAttributesGroupsMain = ({
  attributeGroups,
  onChange,
}: Props) => {
  return (
    <div className="mt-4 px-6">
      <h2>Группы атрибутов:</h2>
      <ProductAttributesGroupsTable
        data={attributeGroups}
        onChange={onChange}
      />
    </div>
  )
}
