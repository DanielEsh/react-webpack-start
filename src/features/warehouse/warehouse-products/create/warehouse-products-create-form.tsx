import { Button, Form, InputNumber } from 'shared/ui-kit'
import { ProductSelect } from 'entities/products/ui/product-select'
import {
  warehouseProductSchema,
  WarehouseProductsForm,
} from 'features/warehouse/warehouse-products/warehouse-product-schema'
import { useForm } from 'shared/ui-kit/form/use-form'
import { useCreateWarehouseProductMutation } from 'entities/warehouse/api/queries/use-create-warehouse-product-mutation'

interface Props {
  warehouseId: number
  onCancel: () => void
}

export const WarehouseProductsCreateForm = (props: Props) => {
  const { warehouseId, onCancel } = props

  const formMethods = useForm(warehouseProductSchema)
  const { mutate: createWarehouseProduct } = useCreateWarehouseProductMutation()

  const handleSubmit = (warehouseProductForm: WarehouseProductsForm) => {
    createWarehouseProduct({
      warehouseId,
      createWarehouseProductDto: warehouseProductForm,
    })
    onCancel()
  }

  return (
    <Form
      methods={formMethods}
      className="p-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-3">
        <Form.Field name="productId">
          <ProductSelect />
        </Form.Field>

        <Form.Field name="quantity">
          <InputNumber label="quantity" />
        </Form.Field>
      </div>

      <div className="mt-3.5 flex gap-3">
        <Button
          type="submit"
          variant="primary"
        >
          Submit
        </Button>

        <Button onClick={onCancel}>Cancel</Button>
      </div>
    </Form>
  )
}
