import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

const APP_ROOT_ID = 'root'

const rootElement = document.getElementById(APP_ROOT_ID)
const root = createRoot(rootElement as Element)

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
