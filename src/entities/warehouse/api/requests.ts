import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api'
import { WarehouseDto, WarehouseCreateDto } from 'entities/warehouse/api/dto'

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
