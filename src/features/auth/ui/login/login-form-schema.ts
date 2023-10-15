import { z } from 'zod'

export const loginFormSchema = z.object({
  username: z.string().nonempty(),
  password: z.string().nonempty(),
})

export type LoginFormSchemaType = z.infer<typeof loginFormSchema>
