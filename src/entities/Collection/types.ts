export interface Collection {
  id: number
  slug: string
  name: string
  goodsCount: number
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
