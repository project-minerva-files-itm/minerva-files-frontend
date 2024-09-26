import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PagesRouter } from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ModalProvider } from './providers/modal_provider'
import { Provider } from 'react-redux'
import { store } from './store';
import { LoaderProvider } from './providers/loader_provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <LoaderProvider>
        <Provider store={store}>
          <BrowserRouter basename='/'>
            <PagesRouter />
          </BrowserRouter>
        </Provider>
      </LoaderProvider>
    </ModalProvider>
  </StrictMode>
)
