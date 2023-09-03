import { z } from 'zod'

export const productFormSchema = z.object({
  article: z.string().nonempty({
    message: 'Must be required',
  }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  price: z.number().nonpositive(),
  description: z.string().optional(),
})

export type ProductForm = z.infer<typeof productFormSchema>