import { z } from 'zod'

export const warehouseFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Must be required',
  }),
})

export type WarehouseForm = z.infer<typeof warehouseFormSchema>
