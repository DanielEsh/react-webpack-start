import { $api } from 'shared/api/api'
import { CreateCategoryDto } from '../types'

export const createCategory = async (form: CreateCategoryDto) => {
  return (await $api.post(`/categories`, form)).data
  // console.log('CREATE', JSON.stringify(form, null, 2))
}
