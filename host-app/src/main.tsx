import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PagesRouter } from './routes'
import './index.css'
import Menu from './components/menu'
import { ThemeProvider } from './providers/theme_provider'
import { ModalProvider } from './providers/modal_provider'
import { Provider } from 'react-redux'
import { store } from './app_setting/store'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}  >
      <ModalProvider>
        <ThemeProvider>
          <BrowserRouter basename='/'>
            <Menu />
            <PagesRouter />
          </BrowserRouter>
        </ThemeProvider>
      </ModalProvider>
    </Provider>
  </StrictMode>,
)
