import { AttributeDto } from './attribute-dto'

export type AttributeUpdateDto = Omit<
  AttributeDto,
  'id' | 'created_at' | 'updated_at' | 'value'
>
