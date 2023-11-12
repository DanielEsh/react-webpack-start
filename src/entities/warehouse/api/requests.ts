import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api'
import {
  WarehouseDto,
  WarehouseCreateDto,
  WarehouseUpdateDto,
} from 'entities/warehouse/api/dto'
import { ProductDto } from 'entities/products'
import { UpdateProductDto } from 'entities/products/api/types'

interface Params {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const createWarehouse = async (warehouseDto: WarehouseCreateDto) => {
  return (await $api.post(`/warehouse`, warehouseDto)).data
}

export const getWarehouses = async (params: Params) => {
  const query = `warehouse?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<WarehouseDto>>(query)).data
}

export const getWarehouseById = async (id: number) => {
  return (await $api.get<WarehouseDto>(`/warehouse/${id}`)).data
}

export const updateWarehouseById = async (
  dto: WarehouseUpdateDto,
  id: number,
) => {
  return (await $api.patch<WarehouseDto>(`/warehouse/${id}`, dto)).data
}
