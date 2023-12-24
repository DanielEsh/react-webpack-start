import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api/types'
import { BrandDto, CreateBrandDto, UpdateBrandDto } from './types'

export const createBrand = async (dto: CreateBrandDto) => {
  return (await $api.post(`/brands`, dto)).data
}

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

export const getBrandById = async (id: number) => {
  return (await $api.get<BrandDto>(`/brands/${id}`)).data
}

export const updateBrandById = async (dto: UpdateBrandDto, id: number) => {
  return (await $api.patch<BrandDto>(`/brands/${id}`, dto)).data
}

export const deleteBrand = async (id: number) => {
  return (await $api.delete<BrandDto>(`/brands/${id}`)).data
}
