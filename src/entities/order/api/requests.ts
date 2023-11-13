import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api'
import { OrderDto } from './dto'

export const getOrders = async (params: PageableResponseParams) => {
  const query = `order?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<OrderDto>>(query)).data
}
