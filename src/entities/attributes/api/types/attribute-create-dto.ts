import { AttributeDto } from './attribute-dto'

export type AttributeCreateDto = Pick<
  AttributeDto,
  'id' | 'created_at' | 'updated_at'
>
