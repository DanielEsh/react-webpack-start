import { lazy } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  type RouteObject,
} from 'react-router-dom'
import { AppRouterPaths } from 'pages/types'
import { PageLoader } from 'shared/ui/page-loader'

import RootLayout from 'widgets/layouts/root-layout'
const HomePage = lazy(() => import('pages/home-page'))
const LoginPage = lazy(() => import('pages/login'))
const ProfilePage = lazy(() => import('pages/profile'))
import categoriesRoutes, {
  CategoriesPage,
  CategoryCreatePage,
  CategoryDetailsPage,
} from 'pages/categories'
import brandsRoutes, {
  BrandCreatePage,
  BrandDetailsPage,
  BrandsPage,
} from 'pages/brands'
import attributesRoutes, {
  AttributeCreatePage,
  AttributeDetailsPage,
  AttributesPage,
} from 'pages/attributes'
import productsRoutes, {
  ProductCreatePage,
  ProductDetailsPage,
  ProductsPage,
} from 'pages/products'
import { sandBoxPages } from 'pages/sandbox'
import warehouseRoutes from 'pages/warehouse'
import ordersRoutes from 'pages/order'
import staffRoutes from 'pages/staff'
import { RouterPage } from 'app/router/ui/router-page'
import OrdersPage from 'pages/order/orders-page'
import OrderCreatePage from 'pages/order/order-create-page'
import OrderDetailsPage from 'pages/order/order-details-page'
import WarehousesPage from 'pages/warehouse/warehouses-page'
import WarehouseCreatePage from 'pages/warehouse/warehouse-create-page'
import WarehouseDetailsPage from 'pages/warehouse/warehouse-details-page'
import StaffPage from 'pages/staff/staff-page'
import StaffCreatePage from 'pages/staff/staff-create-page'
const NotFoundPage = lazy(() => import('pages/not-found'))

type RouterCfgCustomProperty = Omit<RouteObject, 'children'> & {
  private?: boolean
  children?: Record<string, RouterCfgCustomProperty>
}

type RouterType = Record<string, RouterCfgCustomProperty>

const routerCfg: RouterType = {
  RootLayout: {
    path: '/',
    element: <RootLayout />,
    children: {
      HomePage: {
        index: true,
        element: <HomePage />,
      },
      Attributes: {
        path: 'attributes',
        element: (
          <RouterPage>
            <AttributesPage />
          </RouterPage>
        ),
        children: {
          AttributeCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <AttributeCreatePage />
              </RouterPage>
            ),
          },
          AttributeDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <AttributeDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      Brands: {
        path: 'brands',
        element: (
          <RouterPage>
            <BrandsPage />
          </RouterPage>
        ),
        children: {
          BrandCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <BrandCreatePage />
              </RouterPage>
            ),
          },
          BrandDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <BrandDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      Categories: {
        path: 'categories',
        element: (
          <RouterPage>
            <CategoriesPage />
          </RouterPage>
        ),
        children: {
          CategoryCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <CategoryCreatePage />
              </RouterPage>
            ),
          },
          CategoryDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <CategoryDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      Products: {
        path: 'products',
        element: (
          <RouterPage>
            <ProductsPage />
          </RouterPage>
        ),
        children: {
          ProductCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <ProductCreatePage />
              </RouterPage>
            ),
          },
          ProductDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <ProductDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      Warehouse: {
        path: 'warehouses',
        element: (
          <RouterPage>
            <WarehousesPage />
          </RouterPage>
        ),
        children: {
          WarehouseCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <WarehouseCreatePage />
              </RouterPage>
            ),
          },
          WarehouseDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <WarehouseDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      Staff: {
        path: 'staff',
        element: (
          <RouterPage>
            <StaffPage />
          </RouterPage>
        ),
        children: {
          StaffCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <StaffCreatePage />
              </RouterPage>
            ),
          },
        },
      },
      Order: {
        path: 'orders',
        element: (
          <RouterPage>
            <OrdersPage />
          </RouterPage>
        ),
        children: {
          OrderCreate: {
            path: 'create',
            element: (
              <RouterPage>
                <OrderCreatePage />
              </RouterPage>
            ),
          },
          OrderDetails: {
            path: ':id',
            element: (
              <RouterPage>
                <OrderDetailsPage />
              </RouterPage>
            ),
          },
        },
      },
      NotFound: {
        path: '*',
        element: (
          <RouterPage>
            <NotFoundPage />
          </RouterPage>
        ),
      },
    },
  },
  LoginLayout: {
    path: 'login',
    element: (
      <RouterPage>
        <LoginPage />
      </RouterPage>
    ),
  },
}

function transformChildren(obj: any) {
  if (obj.children) {
    obj.children = Object.values(obj.children).map(transformChildren)
  }

  return obj
}

const test = transformChildren(Object.values(routerCfg).map(transformChildren))

console.log('test', test)

export const routerFromConfig = createBrowserRouter(test)

console.log('routerFromConfig', routerFromConfig)

const cfg = [
  {
    path: '/',
    element: (
      <RouterPage isPrivate={true}>
        <RootLayout />
      </RouterPage>
    ),
    children: [
      {
        index: true,
        element: (
          <RouterPage>
            <HomePage />
          </RouterPage>
        ),
      },
      {
        path: 'attributes',
        element: (
          <RouterPage>
            <AttributesPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <AttributeCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <AttributeDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'brands',
        element: (
          <RouterPage>
            <BrandsPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <BrandCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <BrandDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'categories',
        element: (
          <RouterPage>
            <CategoriesPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <CategoryCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <CategoryDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'products',
        element: (
          <RouterPage>
            <ProductsPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <ProductCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <ProductDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'orders',
        element: (
          <RouterPage>
            <OrdersPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <OrderCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <OrderDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'warehouses',
        element: (
          <RouterPage>
            <WarehousesPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <WarehouseCreatePage />
              </RouterPage>
            ),
          },
          {
            path: ':id',
            element: (
              <RouterPage>
                <WarehouseDetailsPage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: 'staff',
        element: (
          <RouterPage>
            <StaffPage />
          </RouterPage>
        ),
        children: [
          {
            path: 'create',
            element: (
              <RouterPage>
                <StaffCreatePage />
              </RouterPage>
            ),
          },
        ],
      },
      {
        path: '*',
        element: (
          <RouterPage>
            <NotFoundPage />
          </RouterPage>
        ),
      },
    ],
  },
  {
    path: 'login',
    element: (
      <RouterPage>
        <LoginPage />
      </RouterPage>
    ),
  },
]

console.log('cfg', cfg)

export const router = createBrowserRouter(cfg)

console.log('router', router)
const combinedRootLayoutRoutes = () => {
  return (
    <>
      <Route
        index
        element={
          <RouterPage isPrivate={true}>
            <HomePage />
          </RouterPage>
        }
      />
      <Route
        path={'profile'}
        element={
          <PageLoader>
            <ProfilePage />
          </PageLoader>
        }
      />
      {...categoriesRoutes}
      {...brandsRoutes}
      {...attributesRoutes}
      {...productsRoutes}
      {...warehouseRoutes}
      {...ordersRoutes}
      {...staffRoutes}
      {...sandBoxPages}
      <Route
        path={AppRouterPaths.notFound}
        element={
          <PageLoader>
            <NotFoundPage />
          </PageLoader>
        }
      />
    </>
  )
}

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRouterPaths.home}
          element={
            <RouterPage>
              <RootLayout />
            </RouterPage>
          }
        >
          {combinedRootLayoutRoutes()}
        </Route>
        <Route path={'login'}>
          <Route
            index
            element={<LoginPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
