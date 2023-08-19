export interface CategoryDto {
  slug: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

export interface Category {
  id: number
  slug: string
  name: string
  description?: string
}

export type CreateCategoryDto = Omit<Category, 'id'>
