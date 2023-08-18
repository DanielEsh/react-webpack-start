import { $api } from 'shared/api/api'
import { Category, CreateCategoryDto } from '../types'
import { ListRequest } from 'entities/collection/types'

export const createCategory = async (form: CreateCategoryDto) => {
  return (await $api.post(`/categories`, form)).data
  // console.log('CREATE', JSON.stringify(form, null, 2))
}

export const getCategories = async () => {
  return (await $api.get<ListRequest<Category>>('categories')).data
}

export const getCategoryBySlug = async (slug: string) => {
  return (await $api.get<Category>(`/categories/${slug}`)).data
}

export const deleteCategory = async (id: number) => {
  return (await $api.delete<Category>(`/categories/${id}`)).data
}
