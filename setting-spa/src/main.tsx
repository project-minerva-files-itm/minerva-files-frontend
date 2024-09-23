import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PagesRouter } from './routes'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/'>
      <PagesRouter />
    </BrowserRouter>
  </StrictMode>,
)
