import { Button, Form, InputNumber } from 'shared/ui-kit'
import { ProductSelect } from 'entities/products/ui/product-select'
import { useForm } from 'shared/ui-kit/form/use-form'
import {
  warehouseProductSchema,
  WarehouseProductsForm,
} from 'entities/warehouse/ui/warehouse-products-table/warehouse-product-schema'

interface Props {
  defaultValues: WarehouseProductsForm
  onClose: () => void
}

export const WarehouseProductUpdateForm = ({
  defaultValues,
  onClose,
}: Props) => {
  const formMethods = useForm(warehouseProductSchema, defaultValues)

  const handleSubmit = (form: WarehouseProductsForm) => {
    console.log('UPDATE', form)
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
