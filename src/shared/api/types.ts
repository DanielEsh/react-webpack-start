interface PaginationLinks {
  previous: number | null
  next: number | null
}

interface Pagination {
  itemsCountOnPage: number
  itemsPerPage: number
  totalPages: number
  page: number
  links: PaginationLinks
}

export interface PageableResponseParams {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export interface Meta {
  totalItemsCount: number
  pagination: Pagination
}

export interface PageableResponse<ENTITY> {
  content: ENTITY[]
  meta: Meta
}
