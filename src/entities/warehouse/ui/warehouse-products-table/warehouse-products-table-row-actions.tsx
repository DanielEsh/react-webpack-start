import { Dropdown } from 'shared/ui-kit/dropdown'
import { Button } from 'shared/ui-kit'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-product-mutation'
import { Row } from '@tanstack/react-table'

interface Props {
  warehouseProduct: WarehouseProductDto
  actions: any
}
export const WarehouseProductsTableRowActions = ({
  warehouseProduct,
  actions,
}: Props) => {
  const { mutate } = useDeleteWarehouseMutate()

  const handleDelete = () => {
    mutate(warehouseProduct.id)
  }

  const handleEditClick = () => {
    console.log('edit')
    actions.edit(warehouseProduct)
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Dropdown</Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item onClick={handleDelete}>delete</Dropdown.Item>
        <Dropdown.Item onClick={handleEditClick}>edit</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  )
}
