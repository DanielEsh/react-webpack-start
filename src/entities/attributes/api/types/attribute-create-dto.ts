import { AttributeDto } from './attribute-dto'

export type AttributeCreateDto = Omit<
  AttributeDto,
  'id' | 'created_at' | 'updated_at' | 'value'
>
