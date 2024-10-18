import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { is18nForTests } from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'
import { StoreProvider } from '../../store-provider/ui/store-provider'
import { StateSchema } from '../../store-provider/config'

interface TestWithTranslationAndRouterProps {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

// wrapper для работы с компонентами, в которых есть перевод
export function componentRender(
  component: ReactNode,
  options: TestWithTranslationAndRouterProps = {},
) {
  const { route = '/', initialState } = options

  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={is18nForTests}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  )
}
