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
  items: Collection[]
  meta: Meta
}
