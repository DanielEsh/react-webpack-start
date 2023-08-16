export interface Category {
  id: number
  slug: string
  name: string
  description?: string
}

export type CreateCategoryDto = Omit<Category, 'id'>
