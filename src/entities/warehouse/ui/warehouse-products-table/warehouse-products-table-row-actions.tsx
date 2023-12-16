import { Dropdown } from 'shared/ui-kit/dropdown'
import { Button } from 'shared/ui-kit'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-product-mutation'

interface Props {
  warehouseProduct: WarehouseProductDto
}
export const WarehouseProductsTableRowActions = ({
  warehouseProduct,
}: Props) => {
  const { mutate } = useDeleteWarehouseMutate()

  const handleDelete = () => {
    mutate(warehouseProduct.id)
  }

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <Button>Dropdown</Button>
      </Dropdown.Trigger>

      <Dropdown.Content>
        <Dropdown.Item onClick={handleDelete}>delete</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  )
}
