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
