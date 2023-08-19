import { z } from 'zod'
import { categoryFormSchema } from './category-form-schema'

export type CategoryForm = z.infer<typeof categoryFormSchema>
