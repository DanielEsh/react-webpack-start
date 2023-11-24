import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api'
import {
  ChangeOrderStatus,
  CreateOrderDto,
  OrderDetailsDto,
  OrderDto,
  UpdateOrderDto,
} from './dto'

export const createOrder = async (createOrderDto: CreateOrderDto) => {
  return (await $api.post(`/order`, createOrderDto)).data
}

export const getOrders = async (params: PageableResponseParams) => {
  const query = `order?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<OrderDto>>(query)).data
}

export const getOrderById = async (id: number) => {
  return (await $api.get<OrderDetailsDto>(`/order/${id}`)).data
}

export const updateOrder = async (dto: UpdateOrderDto, id: number) => {
  return (await $api.patch<OrderDetailsDto>(`/order/${id}`, dto)).data
}

export const changeOrderStatus = async (
  changeOrderStatusDto: ChangeOrderStatus,
  id: number,
) => {
  return (
    await $api.patch<OrderDetailsDto>(`/order/${id}`, changeOrderStatusDto)
  ).data
}
