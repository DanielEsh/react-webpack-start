import { ProductAttributesGroupsTable } from './data-table'
import { ProductAttributesGroup } from './types'

const data: ProductAttributesGroup[] = [
  {
    name: 'Группа атрибутов 1',
    attributes: [
      {
        attributeId: 4,
        value: 'attribute-value',
      },
    ],
  },
  {
    name: 'Группа атрибутов 2',
    attributes: [],
  },
]

export const ProductsAttributesGroupsMain = () => {
  return <ProductAttributesGroupsTable data={data} />
}
