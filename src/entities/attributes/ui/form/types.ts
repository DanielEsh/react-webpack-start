import { z } from 'zod'
import { attributeFormSchema } from './attribute-form-schema'

export type AttributeForm = z.infer<typeof attributeFormSchema>
