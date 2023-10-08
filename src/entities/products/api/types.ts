import type { BrandDto } from 'entities/brands/api/types'
import type { CategoryDto } from 'entities/categories/types'

type ProductBrand = Pick<BrandDto, 'id' | 'name' | 'slug'>
type ProductCategory = Pick<CategoryDto, 'id' | 'name' | 'slug'>

export interface AttributesGroupsAttributeDto {
  attributeId: number
  value: string
}

export interface AttributesGroupsDto {
  name: string
  attributes: AttributesGroupsAttributeDto[]
}

export interface ProductDto {
  id: number
  article: string
  name: string
  price: number
  descriptions?: string
  brand: ProductBrand
  category: ProductCategory
  attributesGroups: AttributesGroupsDto[]
}

export type CreateProductDto = Pick<
  ProductDto,
  'article' | 'name' | 'price' | 'descriptions'
> & {
  brandId?: any
  categoryId?: any
}

export type UpdateProductDto = CreateProductDto
