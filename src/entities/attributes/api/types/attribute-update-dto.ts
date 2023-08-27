import { AttributeDto } from './attribute-dto'

export type AttributeUpdateDto = Pick<
  AttributeDto,
  'id' | 'created_at' | 'updated_at'
>
