import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'
import { ThemeContextProvider } from 'app/providers'

import './shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/providers/error-boundary'

render(
    <ErrorBoundary >
        <BrowserRouter>
            <ThemeContextProvider>
                <App />
            </ThemeContextProvider>
        </BrowserRouter>
    </ErrorBoundary>,
    document.getElementById('root')
)
