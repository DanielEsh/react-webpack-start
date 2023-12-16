import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api'
import {
  WarehouseDto,
  WarehouseCreateDto,
  WarehouseUpdateDto,
  WarehouseProductDto,
} from 'entities/warehouse/api/dto'
import { ProductDto } from 'entities/products'
import { UpdateProductDto } from 'entities/products/api/types'
import { Category } from 'entities/categories/types'

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

export const getWarehouseProducts = async (id: number, params: Params) => {
  const query = `${qs.stringify(params)}`
  return (
    await $api.get<PageableResponse<WarehouseProductDto>>(
      `/warehouse/${id}/products?${query}`,
    )
  ).data
}

export const updateWarehouseById = async (
  dto: WarehouseUpdateDto,
  id: number,
) => {
  return (await $api.patch<WarehouseDto>(`/warehouse/${id}`, dto)).data
}

export const deleteWarehouseProduct = async (id: number) => {
  return (await $api.delete<WarehouseProductDto>(`/warehouse/products/${id}`))
    .data
}

export const deleteWarehouse = async (id: number) => {
  return (await $api.delete<WarehouseDto>(`/warehouse/${id}`)).data
}
