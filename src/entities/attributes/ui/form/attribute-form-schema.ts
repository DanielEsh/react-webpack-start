import { AttributeType } from 'entities/attributes/types'
import { z } from 'zod'

export const attributeFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  type: z.enum([
    AttributeType.List,
    AttributeType.Number,
    AttributeType.String,
  ]),
  description: z.string().optional(),
})
