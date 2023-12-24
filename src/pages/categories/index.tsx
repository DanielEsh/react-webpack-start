import { lazy } from 'react'

export const CategoriesPage = lazy(
  () => import('./categories-page/categories-page'),
)
export const CategoryCreatePage = lazy(
  () => import('./category-create-page/category-create-page'),
)
export const CategoryDetailsPage = lazy(
  () => import('./category-details-page/category-details-page'),
)
