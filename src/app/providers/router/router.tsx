import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutesProps, routerConfig } from 'shared/config'
import { PageLoader } from 'widgets'
import { RequireAuth } from './require-auth'

export const Router = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{route.element}</RequireAuth>
          ) : (
            route.element
          )
        }
      />
    )
  }, [])

  return (
    // <div className="app-content-page">
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routerConfig).map((route) => renderWithWrapper(route))}
      </Routes>
    </Suspense>
    // </div>
  )
})
