import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api/types'
import { BrandDto, CreateBrandDto, UpdateBrandDto } from './types'

export const createCategory = async (dto: CreateBrandDto) => {
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

export const getBrandBySlug = async (slug: string) => {
  console.log('getCategoryBySlug')
  return (await $api.get<BrandDto>(`/brands/${slug}`)).data
}

export const updateBrandBySlug = async (dto: UpdateBrandDto, slug: string) => {
  return (await $api.patch<BrandDto>(`/brands/${slug}`, dto)).data
}

export const deleteBrand = async (id: number) => {
  return (await $api.delete<BrandDto>(`/brands/${id}`)).data
}
