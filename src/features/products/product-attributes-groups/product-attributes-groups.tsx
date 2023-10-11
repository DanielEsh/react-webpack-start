import { ProductAttributesGroupsTable } from './product-attributes-groups-table'
import { ProductAttributesGroup } from './types'

interface Props {
  attributeGroups: ProductAttributesGroup[]
  onChange(attributeGroups: ProductAttributesGroup[]): void
}

export const ProductAttributesGroups = ({
  attributeGroups,
  onChange,
}: Props) => {
  return (
    <div className="mt-8 px-6">
      <h2>Группы атрибутов:</h2>
      <ProductAttributesGroupsTable
        data={attributeGroups}
        onChange={onChange}
      />
    </div>
  )
}
