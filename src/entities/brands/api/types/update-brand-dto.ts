import { BrandDto } from './brand-dto'

export type UpdateBrandDto = Omit<BrandDto, 'id' | 'updated_at' | 'created_at'>
