import { z } from 'zod'

const slugRegex = new RegExp('^[a-z0-9]+(?:-[a-z0-9]+)*$')

export const categoryFormSchema = z.object({
  slug: z
    .string()
    .nonempty({
      message: 'Must be required',
    })
    .refine((value) => slugRegex.test(value), {
      message: 'Invalid slug format',
    }),
  name: z.string().nonempty({
    message: 'Must be required',
  }),
  description: z.string().optional(),
})
