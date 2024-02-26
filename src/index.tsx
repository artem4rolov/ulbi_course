import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'
import { ThemeContextProvider } from 'app/providers'
import { ErrorBoundary } from 'app/providers/error-boundary'

import './shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/store-provider'

render(
    <StoreProvider>
        <ErrorBoundary >
            <BrowserRouter>
                <ThemeContextProvider>
                    <App />
                </ThemeContextProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </StoreProvider>,
    document.getElementById('root')
)
