export interface Collection {
  id: number
  slug: string
  name: string
  description?: string
  goodsCount?: number
  created_at?: string
  updated_at?: string
}

export interface UpdateCollectionForm {
  slug: string
  name: string
  description?: string
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface Data {
  data: Collection[]
  meta: Meta
}
