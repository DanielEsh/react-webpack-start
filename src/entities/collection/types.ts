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
  totalItemsCount: number
  itemCount: number
  itemsPerPage: number
  totalPages: number
  currentPage: number
  previous: number | null
  next: number | null
}

export interface Meta {
  pagination: Pagination
}

export interface Data {
  data: Collection[]
  meta: Meta
}
