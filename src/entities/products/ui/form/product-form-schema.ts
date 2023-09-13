import { z } from 'zod'

export const productFormSchema = z.object({
  article: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  price: z.number().positive(),
  brandId: z.any(),
  categoryId: z.any(),
  description: z.string().optional(),
})

export type ProductForm = z.infer<typeof productFormSchema>
