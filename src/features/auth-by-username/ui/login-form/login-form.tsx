import { FC, memo, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useTranslation } from 'react-i18next'
import {
  authByUserNameActions,
  authByUserNameReducer,
} from 'features/auth-by-username/model/slice/auth-slice'
import { loginByUserName } from 'features/auth-by-username/services/auth-service'
import { ButtonSize, ButtonTheme } from 'shared/ui/button/button.types'
import { Text } from 'shared/ui/text'
import { Button, DynamicModuleLoader, Input, ReducersList } from 'shared'

import styles from './login-form.module.scss'

import {
  getAuthError,
  getAuthIsLoading,
  getAuthPassword,
  getAuthUsername,
} from '../../model/selectors'

export interface LoginFormProps {
  className?: string
}

const initialReducers: Pick<ReducersList, 'auth'> = {
  auth: authByUserNameReducer,
}

const LoginForm: FC<LoginFormProps> = memo(() => {
  const { t } = useTranslation('translation')

  const error = useSelector(getAuthError)
  const isLoading = useSelector(getAuthIsLoading)
  const password = useSelector(getAuthPassword)
  const username = useSelector(getAuthUsername)

  const dispatch = useDispatch()

  const onChangeUserName = useCallback(
    (value: string) => {
      dispatch(authByUserNameActions.setUserName(value))
    },
    [dispatch],
  )

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(authByUserNameActions.setUserPassword(value))
    },
    [dispatch],
  )

  const onSubmit = useCallback(() => {
    dispatch(loginByUserName({ username, password }))
  }, [dispatch, username, password])

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={styles['login-form-wrapper']}>
        {error && <Text text={error} variant={'error'} />}
        <div>
          <Input
            type="text"
            placeholder="username"
            onChange={onChangeUserName}
            autoFocus={true}
          />
          <Input
            type="text"
            placeholder="password"
            onChange={onChangePassword}
          />
        </div>
        <Button
          theme={ButtonTheme.SOLID}
          size={ButtonSize.BUTTON_SIZE_M}
          onClick={onSubmit}
          disabled={isLoading}
        >
          {t('signInButton')}
        </Button>
      </div>
    </DynamicModuleLoader>
  )
})

export default LoginForm
