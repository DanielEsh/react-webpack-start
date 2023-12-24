import { lazy } from 'react'

export const BrandsPage = lazy(() => import('./brands-page/brands-page'))
export const BrandCreatePage = lazy(
  () => import('./brand-create-page/brand-create-page'),
)
export const BrandDetailsPage = lazy(
  () => import('./brand-details-page/brand-details-page'),
)
