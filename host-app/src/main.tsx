import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PagesRouter } from './routes'
import Menu from './components/menu'
import './index.css'
import { ThemeProvider } from './providers/theme_provider'
import { ModalProvider } from './providers/modal_provider'
//import { ModalProvider } from 'settingspa/ModalProvider'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalProvider>
      <ThemeProvider>
        <BrowserRouter basename='/'>
          <Menu />
          <PagesRouter />
        </BrowserRouter>
      </ThemeProvider>
    </ModalProvider>
  </StrictMode>,
)
