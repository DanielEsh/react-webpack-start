export interface CategoryDto {
  id: number
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
  created_at?: string
  updated_at?: string
}

export type CreateCategoryDto = Omit<Category, 'id'>
export type UpdateCategoryDto = Omit<Category, 'id'>
