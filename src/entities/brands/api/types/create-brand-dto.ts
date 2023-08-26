import { BrandDto } from './brand-dto'

export type CreateBrandDto = Omit<BrandDto, 'id' | 'updated_at' | 'created_at'>
