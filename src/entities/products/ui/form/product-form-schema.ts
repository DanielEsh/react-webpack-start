import { z } from 'zod'

const attributesSchema = z.object({
  attributeId: z.number().optional(),
  value: z.string().nonempty(),
})

const productsAttributesGroupsSchema = z.object({
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  attributes: z.array(attributesSchema),
})

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
  attributeGroup: z.array(productsAttributesGroupsSchema),
})

export type ProductForm = z.infer<typeof productFormSchema>
