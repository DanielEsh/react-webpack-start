export interface CategoryDto {
  id: number
  slug: string
  name: string
  description?: string
  updated_at: string | null //timestamp
  created_at: string | null //timestamp
}
