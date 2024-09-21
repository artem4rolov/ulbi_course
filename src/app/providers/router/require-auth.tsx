import { getAuthData } from 'entities/user'
import React, { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RouterPaths } from 'shared'

interface IRequireAuthProps extends PropsWithChildren {}

export const RequireAuth = ({ children }: IRequireAuthProps) => {
  const auth = useSelector(getAuthData)
  const location = useLocation()

  if (!auth) {
    return <Navigate to={RouterPaths.main} />
  }

  return children
}
