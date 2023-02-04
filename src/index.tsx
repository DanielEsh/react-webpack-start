import { createRoot } from 'react-dom/client'
import { App } from 'app'

const APP_ROOT_ID = 'root'

const rootElement = document.getElementById(APP_ROOT_ID)
const root = createRoot(rootElement as Element)

root.render(<App />)
