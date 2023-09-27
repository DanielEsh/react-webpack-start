import { z } from 'zod'

export const productFormSchema = z.object({
  article: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  price: z.number().positive(),
  brandId: z.number(),
  categoryId: z.number(),
  description: z.string().optional().nullable(),
})

export type ProductForm = z.infer<typeof productFormSchema>
