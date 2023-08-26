import { $api } from 'shared/api/api'
import {
  Category,
  CategoryDto,
  CreateCategoryDto,
  UpdateCategoryDto,
} from '../types'
import qs from 'qs'
import { PageableResponse } from 'shared/api/types'

export const createCategory = async (form: CreateCategoryDto) => {
  return (await $api.post(`/categories`, form)).data
  // console.log('CREATE', JSON.stringify(form, null, 2))
}

interface Params {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const getCategories = async (params: Params) => {
  const query = `categories?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<Category>>(query)).data
}

export const getCategoryBySlug = async (slug: string) => {
  console.log('getCategoryBySlug')
  return (await $api.get<CategoryDto>(`/categories/${slug}`)).data
}

export const updateCategoryBySlug = async (
  form: UpdateCategoryDto,
  slug: string,
) => {
  return (await $api.patch<Category>(`/categories/${slug}`, form)).data
}

export const deleteCategory = async (id: number) => {
  return (await $api.delete<Category>(`/categories/${id}`)).data
}
