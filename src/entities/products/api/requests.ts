import { $api } from 'shared/api/api'
import { CreateProductDto, ProductDto, UpdateProductDto } from './types'
import qs from 'qs'
import { PageableResponse } from 'shared/api/types'
import { ProductForm } from '../ui/form/product-form-schema'

export const createProduct = async (productDto: ProductForm) => {
  return (await $api.post(`/products`, productDto)).data
}

interface Params {
  page?: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const getProducts = async (params?: Params) => {
  console.log('getProducts', params)
  const query = `products?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<ProductDto>>(query)).data
}

export const getProductById = async (id: number) => {
  return (await $api.get<ProductDto>(`/products/${id}`)).data
}

export const updateProductById = async (dto: UpdateProductDto, id: number) => {
  return (await $api.patch<ProductDto>(`/products/${id}`, dto)).data
}

export const deleteProductsById = async (id: number) => {
  return (await $api.delete<ProductDto>(`/products/${id}`)).data
}
