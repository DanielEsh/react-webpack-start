import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api/types'
import { BrandDto } from './types'

interface Params {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const getBrands = async (params: Params) => {
  const query = `brands?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<BrandDto>>(query)).data
}
