import { $api } from 'shared/api/api'
import { CreateProductDto, ProductDto, UpdateProductDto } from './types'
import qs from 'qs'
import { PageableResponse, PageableResponseParams } from 'shared/api'

export const createProduct = async (productDto: CreateProductDto) => {
  return (await $api.post(`/products`, productDto)).data
}

export const getProducts = async (params: PageableResponseParams) => {
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
