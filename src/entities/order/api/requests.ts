import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api'
import { OrderDetailsDto, OrderDto } from './dto'

export const getOrders = async (params: PageableResponseParams) => {
  const query = `order?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<OrderDto>>(query)).data
}

export const getOrderById = async (id: number) => {
  return (await $api.get<OrderDetailsDto>(`/order/${id}`)).data
}
