import { FC, ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { is18nForTests } from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'

interface TestWithTranslationAndRouterProps {
    route?: string
}

// wrapper для работы с компонентами, в которых есть перевод
export const TestWithTranslationAndRouter = (component: ReactNode, options?: TestWithTranslationAndRouterProps) => {

    return render(
        <MemoryRouter initialEntries={['/']}>
            <I18nextProvider i18n={is18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
