import { z } from 'zod'

export const staffFormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  phone: z.string(),
  email: z.string(),
})

export type StaffFormSchema = z.infer<typeof staffFormSchema>
