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
    <ProductAttributesGroupsTable
      data={attributeGroups}
      onChange={onChange}
    />
  )
}
