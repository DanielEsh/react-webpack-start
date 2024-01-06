import { Button, Form, InputNumber } from 'shared/ui-kit'
import { ProductSelect } from 'entities/products/ui/product-select'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  warehouseProductSchema,
  WarehouseProductsForm,
} from 'features/warehouse/warehouse-products/warehouse-product-schema'
import { useUpdateWarehouseProductByIdMutation } from 'entities/warehouse/api/queries/use-update-warehouse-product-by-id-mutation'

interface Props {
  id: number
  defaultValues: WarehouseProductsForm
  onClose: () => void
}

export const WarehouseProductUpdateForm = ({
  id,
  defaultValues,
  onClose,
}: Props) => {
  const { mutate } = useUpdateWarehouseProductByIdMutation()
  const formMethods = useForm(warehouseProductSchema, defaultValues)

  const handleSubmit = (form: WarehouseProductsForm) => {
    mutate({
      form,
      id,
    })

    onClose()
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

        <Button onClick={onClose}>Cancel</Button>
      </div>
    </Form>
  )
}
