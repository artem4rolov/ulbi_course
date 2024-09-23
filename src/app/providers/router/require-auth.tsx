import { getAuthData } from 'entities/user'
import { PropsWithChildren } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { RouterPaths } from 'shared'

interface IRequireAuthProps extends PropsWithChildren {}

export const RequireAuth = ({
  children = <></>,
}: IRequireAuthProps): React.ReactElement => {
  const auth = useSelector(getAuthData)

  if (!auth) {
    return <Navigate to={RouterPaths.main} />
  }

  return <>{children}</>
}
