import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api/types'
import { BrandDto, CreateBrandDto, UpdateBrandDto } from './types'

export const createBrand = async (dto: CreateBrandDto) => {
  return (await $api.post(`/brands`, dto)).data
}

export const getBrands = async (params: PageableResponseParams) => {
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
