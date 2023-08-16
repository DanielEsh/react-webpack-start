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
