import { getAuthData } from 'entities/user'
import { memo, Suspense, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { routerConfig } from 'shared/config'
import { PageLoader } from 'widgets'

export const Router = memo(() => {
  const isAuth = useSelector(getAuthData)

  const routes = useMemo(() => {
    return Object.values(routerConfig).filter((route) => {
      if (route.authOnly && !isAuth) {
        return false
      }

      return true
    })
  }, [isAuth])

  return (
    <div className="app-content-page">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {Object.values(routes).map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  )
})
