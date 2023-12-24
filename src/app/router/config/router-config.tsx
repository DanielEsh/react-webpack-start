import { RouteProps } from 'react-router-dom'
import { PrivateRoute } from 'app/router/ui/private-route'
import RootLayout from 'widgets/layouts/root-layout'
import { AppLayouts, AppRoutes } from 'app/router/types'
import { lazy } from 'react'
import { PageLoader } from 'shared/ui/page-loader'
import { renderRouteFromConfig } from 'app/router/ui/render-route-from-config'

const HomePage = lazy(() => import('pages/home-page'))
export const CategoriesPage = lazy(() => import('pages/categories/categories'))
export const CategoryCreatePage = lazy(() => import('pages/categories/create'))
export const CategoryDetailsPage = lazy(
  () => import('pages/categories/category-details-page'),
)

export const BrandsPage = lazy(() => import('pages/brands/brands-page'))
export const BrandCreatePage = lazy(
  () => import('pages/brands/brand-create-page'),
)
export const BrandDetailsPage = lazy(
  () => import('pages/brands/brand-details-page'),
)

export const AttributesPage = lazy(
  () => import('pages/attributes/attributes-page'),
)
export const AttributeCreatePage = lazy(
  () => import('pages/attributes/attribute-create-page'),
)
export const AttributeDetailsPage = lazy(
  () => import('pages/attributes/attribute-details-page'),
)

const categories: Record<string, RouteProps> = {
  [AppRoutes.CATEGORY_CREATE]: {
    path: 'categories/create',
    element: (
      <PrivateRoute>
        <PageLoader>
          <CategoryCreatePage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.CATEGORY_DETAILS]: {
    path: 'categories/:id',
    element: (
      <PrivateRoute>
        <PageLoader>
          <CategoryDetailsPage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
}

type RouterConfigKey = RouteProps | Record<string, RouteProps>[]

const appRoutes: Record<AppRoutes, RouterConfigKey> = {
  [AppRoutes.HOME]: {
    index: true,
    element: (
      <PrivateRoute>
        <PageLoader>
          <HomePage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.CATEGORIES]: [
    {
      CATEGORIES_CREATE: {
        index: true,
      },
    },
  ],
  [AppRoutes.BRANDS]: {
    path: 'brands',
    element: (
      <PrivateRoute>
        <PageLoader>
          <BrandsPage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.BRAND_CREATE]: {
    path: 'brands/create',
    element: (
      <PrivateRoute>
        <PageLoader>
          <BrandCreatePage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.BRAND_DETAILS]: {
    path: 'brands/:id',
    element: (
      <PrivateRoute>
        <PageLoader>
          <BrandDetailsPage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.ATTRIBUTES]: {
    path: 'attributes',
    element: (
      <PrivateRoute>
        <PageLoader>
          <AttributesPage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.ATTRIBUTE_CREATE]: {
    path: 'attributes/create',
    element: (
      <PrivateRoute>
        <PageLoader>
          <AttributeCreatePage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
  [AppRoutes.ATTRIBUTE_DETAILS]: {
    path: 'attributes/:id',
    element: (
      <PrivateRoute>
        <PageLoader>
          <AttributeDetailsPage />
        </PageLoader>
      </PrivateRoute>
    ),
  },
}

export const routerConfig: Record<AppLayouts, RouteProps> = {
  [AppLayouts.APP]: {
    path: '/',
    element: <RootLayout />,
    children: renderRouteFromConfig(appRoutes),
  },
}
