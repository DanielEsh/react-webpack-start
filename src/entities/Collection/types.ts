export type Collection = {
  id: number
  slug: string
  name: string
  goodsCount: number
}

export type Meta = {
  totalCount: number
  totalPages: number
}

export interface Data {
  data: Collection[]
  meta: Meta
}
