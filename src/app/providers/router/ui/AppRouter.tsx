import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routesConfig } from 'app/providers/router'

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {Object.values(routesConfig).map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </Suspense>
  )
}
