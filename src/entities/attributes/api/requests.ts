import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse } from 'shared/api/types'
import { AttributeDto, AttributeCreateDto, AttributeUpdateDto } from './types'

export const createAttribute = async (dto: AttributeCreateDto) => {
  return (await $api.post(`/attributes`, dto)).data
}

interface Params {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const getAttributes = async (params: Params) => {
  const query = `attributes?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<AttributeDto>>(query)).data
}

export const getAttributeById = async (id: number) => {
  return (await $api.get<AttributeDto>(`/attributes/${id}`)).data
}

export const updateAttributeById = async (
  dto: AttributeUpdateDto,
  id: number,
) => {
  return (await $api.patch<AttributeDto>(`/attributes/${id}`, dto)).data
}

export const deleteAttribute = async (id: number) => {
  return (await $api.delete<AttributeDto>(`/attributes/${id}`)).data
}
