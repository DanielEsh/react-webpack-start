import { z } from 'zod'

export const attributeFormSchema = z.object({
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  type: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})
