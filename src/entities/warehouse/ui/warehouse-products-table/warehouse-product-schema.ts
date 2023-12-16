import { z } from 'zod'

export const warehouseProductSchema = z.object({
  productId: z.number(),
  quantity: z.number(),
})

export type WarehouseProductsForm = z.infer<typeof warehouseProductSchema>
