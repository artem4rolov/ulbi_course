import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'
import { ThemeContextProvider } from 'app/providers'
import { ErrorBoundary } from 'app/providers/error-boundary'

import './shared/config/i18n/i18n'
import { StoreProvider } from 'app/providers/store-provider'

render(
  // чтобы достучаться до функции navigate из thunk,
  // провайдер стора должен быть ниже по уровню вложенности, чем провайдер роутинга
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)
