import { createRoot } from 'react-dom/client'
import { App } from 'app'

// i18n
import 'shared/lib/l18n/i18'

// msw
import { initMsw } from '__mocks__'
initMsw()

const APP_ROOT_ID = 'root'

const rootElement = document.getElementById(APP_ROOT_ID)
const root = createRoot(rootElement as Element)

root.render(<App />)
