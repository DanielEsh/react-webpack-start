import { $api } from 'shared/api/api'
import { CreateProductDto, ProductDto, UpdateProductDto } from './types'
import qs from 'qs'
import { PageableResponse } from 'shared/api/types'

export const createProduct = async (productDto: CreateProductDto) => {
  return (
    await $api.post(`/products`, {
      ...productDto,
      attributesGroups: [
        {
          name: 'Группа атрибутов 1',
          attributes: [
            {
              attributeId: 4,
              value: 'attribute-value',
            },
          ],
        },
      ],
    })
  ).data
}

interface Params {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const getProducts = async (params: Params) => {
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
