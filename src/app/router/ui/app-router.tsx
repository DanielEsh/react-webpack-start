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

enum AppRoutes {
  Root = 'RootLayout',
  Home = 'Home',
  Attributes = 'Attributes',
  AttributeCreate = 'AttributeCreate',
  AttributeDetails = 'AttributeDetails',
  Brands = 'Brands',
  BrandCreate = 'BrandsCreate',
  BrandDetails = 'BrandDetails',
  Categories = 'Categories',
  CategoryCreate = 'CategoryCreate',
  CategoryDetails = 'CategoryDetails',
  Products = 'Products',
  ProductCreate = 'ProductCreate',
  ProductDetails = 'ProductDetails',
  Warehouses = 'Warehouses',
  WarehouseCreate = 'WarehouseCreate',
  WarehouseDetails = 'WarehouseDetails',
  Staff = 'Staff',
  StaffCreate = 'StaffCreate',
  Orders = 'Orders',
  OrderCreate = 'OrderCreate',
  OrderDetails = 'OrderDetails',
  NotFound = 'NotFound',
  LogIn = 'LogIn',
}

type RouterCfgCustomProperty = Omit<RouteObject, 'children'> & {
  children?: Record<string, RouterCfgCustomProperty>
}

type RouterType = Record<string, RouterCfgCustomProperty>

const AttributesRoutes = {
  [AppRoutes.Attributes]: {
    path: 'attributes',
    element: (
      <RouterPage>
        <AttributesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.AttributeCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <AttributeCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.AttributeDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <AttributeDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const BrandsRoutes = {
  [AppRoutes.Brands]: {
    path: 'brands',
    element: (
      <RouterPage>
        <BrandsPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.BrandCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <BrandCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.BrandDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <BrandDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const CategoriesRoutes = {
  [AppRoutes.Categories]: {
    path: 'categories',
    element: (
      <RouterPage>
        <CategoriesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.CategoryCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <CategoryCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.CategoryDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <CategoryDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const ProductsRoutes = {
  [AppRoutes.Products]: {
    path: 'products',
    element: (
      <RouterPage>
        <ProductsPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.ProductCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <ProductCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.ProductDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <ProductDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const WarehouseRoutes = {
  [AppRoutes.Warehouses]: {
    path: 'warehouses',
    element: (
      <RouterPage>
        <WarehousesPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.WarehouseCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <WarehouseCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.WarehouseDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <WarehouseDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const StaffRoutes = {
  [AppRoutes.Staff]: {
    path: 'staff',
    element: (
      <RouterPage>
        <StaffPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.StaffCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <StaffCreatePage />
          </RouterPage>
        ),
      },
    },
  },
}

const OrdersRoutes = {
  [AppRoutes.Orders]: {
    path: 'orders',
    element: (
      <RouterPage>
        <OrdersPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.OrderCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <OrderCreatePage />
          </RouterPage>
        ),
      },
      [AppRoutes.OrderDetails]: {
        path: ':id',
        element: (
          <RouterPage>
            <OrderDetailsPage />
          </RouterPage>
        ),
      },
    },
  },
}

const routerCfg: RouterType = {
  [AppRoutes.Root]: {
    path: '/',
    element: <RootLayout />,
    children: {
      [AppRoutes.Home]: {
        index: true,
        element: <HomePage />,
      },
      ...AttributesRoutes,
      ...BrandsRoutes,
      ...CategoriesRoutes,
      ...ProductsRoutes,
      ...WarehouseRoutes,
      ...StaffRoutes,
      ...OrdersRoutes,
      [AppRoutes.NotFound]: {
        path: '*',
        element: (
          <RouterPage>
            <NotFoundPage />
          </RouterPage>
        ),
      },
    },
  },
  [AppRoutes.LogIn]: {
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

function createRouter(routerCfg: RouterType) {
  const routeObject = Object.values(routerCfg).map(transformChildren)

  return createBrowserRouter(
    routeObject.map((item): RouteObject => {
      if (item.index) {
        return {
          index: true,
          path: item.path,
          element: item.element,
          children: undefined,
        }
      }

      return {
        path: item.path,
        index: false,
        element: item.element,
        children: item.children,
      }
    }),
  )
}

export const routerFromConfig = createRouter(routerCfg)

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
