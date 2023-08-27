import { AttributeType } from 'entities/attributes/types'

export interface AttributeDto {
  id: number
  name: string
  value: string
  description: string
  type: AttributeType
  created_at: string // timestamp 2023-08-26T20:00:52.514Z
  updated_at: string // timestamp
}
