import { Button, Modal } from 'shared/ui-kit'
import { WarehouseProductDto } from 'entities/warehouse/api/dto'
import { useDeleteWarehouseMutate } from 'entities/warehouse/api/queries/use-delete-warehouse-product-mutation'
import IconEdit from 'shared/assets/icons/edit.svg'
import IconTrash from 'shared/assets/icons/trash.svg'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { WarehouseProductUpdateForm } from 'features/warehouse/warehouse-products/update/warehouse-product-update-form'

interface Props {
  warehouseProduct: WarehouseProductDto
}
export const WarehouseProductsTableRowActions = ({
  warehouseProduct,
}: Props) => {
  const { mutate } = useDeleteWarehouseMutate()
  const [opened, { open, close }] = useDisclosure()
  const handleDelete = () => {
    mutate(warehouseProduct.id)
  }

  const handleEditClick = () => {
    open()
  }

  return (
    <div className="flex justify-end gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={handleEditClick}
      >
        <IconEdit />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        onClick={handleDelete}
      >
        <IconTrash />
      </Button>

      <Modal open={opened}>
        <WarehouseProductUpdateForm
          id={warehouseProduct.id}
          defaultValues={{
            productId: warehouseProduct.product,
            quantity: warehouseProduct.quantity,
          }}
          onClose={close}
        />
      </Modal>
    </div>
  )
}
