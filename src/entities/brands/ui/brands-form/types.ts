import { z } from 'zod'
import { brandFormSchema } from './brand-form-schema'

export type BrandForm = z.infer<typeof brandFormSchema>
