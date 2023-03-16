import React, { memo, Suspense, useCallback } from 'react'
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom'
import { AppRoutesProps, routeConfig } from '../config'
import { RequireAuth } from 'app/providers/router/ui/RequireAuth'

import RootLayout from 'widgets/layouts/RootLayout'
import TestLayout from 'widgets/layouts/TestLayout'
import { MainPage } from 'pages/MainPage/MainPage'
import { AboutPageAsync } from 'pages/AboutPage/AboutPage.async'
import CollectionsPage from 'pages/CollectionsPage/CollectionsPage'
import CollectionPage from 'pages/CollectionPage/CollectionPage'
import { GlobalNotFoundPage } from 'pages/GlobalNotFound'

const Faq = () => {
  return <div>faq</div>
}

const Contact = () => {
  return <div>Contact</div>
}

const Layout404 = () => {
  return <div>layout 404</div>
}

const testLayout = [
  {
    path: '/test',
    element: <TestLayout />,
    children: [
      {
        path: 'faq',
        element: <Faq />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]

const rootLayout = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'about',
        element: <AboutPageAsync />,
      },
      {
        path: 'collections',
        element: <CollectionsPage />,
        children: [
          {
            path: ':id',
            element: <CollectionPage />,
          },
        ],
      },
    ],
  },
]

const r = [
  ...testLayout,
  ...rootLayout,
  { path: '*', element: <GlobalNotFoundPage /> },
]

const router = createBrowserRouter(r)

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route
//         path="/test"
//         element={<TestLayout />}
//       >
//         <Route
//           path="faq"
//           element={<Faq />}
//         />
//         <Route
//           path="contact"
//           element={<Contact />}
//         />
//       </Route>

//       <Route
//         path="/"
//         element={<RootLayout />}
//       >
//         <Route
//           index
//           element={<MainPage />}
//         />
//         <Route
//           path="about"
//           element={<AboutPageAsync />}
//         />
//         <Route
//           path="collections"
//           element={<CollectionsPage />}
//         />
//         <Route
//           path="collections/:id"
//           element={<CollectionPage />}
//         />
//       </Route>

//       <Route
//         path="*"
//         element={<NotFoundPage />}
//       />
//     </>,
//   ),
// )

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<div>PAGE LOADER...</div>}>
        <>{route.element}</>
      </Suspense>
    )
    return (
      <Route
        key={route.path}
        path={route.path}
        index={route.index}
        element={
          route.authOnly ? <RequireAuth>{element}</RequireAuth> : element
        }
      />
    )
  }, [])

  return <RouterProvider router={router} />
}

export default memo(AppRouter)
