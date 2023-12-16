import { number } from 'zod'

interface WarehouseProductsDto {
  productId: number
  quantity: number
}

export interface WarehouseDto {
  id: number
  name: string
  products?: WarehouseProductsDto[]
}

export type WarehouseCreateDto = Pick<WarehouseDto, 'name' | 'products'>
export type WarehouseUpdateDto = Pick<WarehouseDto, 'name' | 'products'>

export interface WarehouseProductDto {
  id: number
  quantity: number
  product: any
}

export interface CreateWarehouseProductDto {
  productId: number
  quantity: number
}
