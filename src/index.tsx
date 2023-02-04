import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from 'app'

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
