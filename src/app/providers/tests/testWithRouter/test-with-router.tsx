import { ReactNode } from 'react'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { is18nForTests } from 'shared/config/i18n/i18nForTests'
import { MemoryRouter } from 'react-router-dom'

// wrapper для работы с компонентами, в которых есть перевод
export function TestWithTranslationAndRouter (component: ReactNode) {
    return render(
        <MemoryRouter>
            <I18nextProvider i18n={is18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}
