import { ProductAttributesGroupsTable } from './data-table'
import { ProductAttributesGroup } from './types'

const data: ProductAttributesGroup[] = [
  {
    name: 'Группа атрибутов 1',
    count: 23,
    attributes: [
      {
        name: 'attribute-name',
        value: 'attribute-value',
      },
    ],
  },
  {
    name: 'Группа атрибутов 2',
    count: 1,
    attributes: [],
  },
]

export const ProductsAttributesGroupsMain = () => {
  return <ProductAttributesGroupsTable data={data} />
}
