import { createRoot } from 'react-dom/client'
import { App } from 'app'

import 'shared/lib/l18n/i18'

const APP_ROOT_ID = 'root'

const rootElement = document.getElementById(APP_ROOT_ID)
const root = createRoot(rootElement as Element)

root.render(<App />)
