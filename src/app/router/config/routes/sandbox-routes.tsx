import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import { SandBoxPage, SandBoxPageIcons } from 'pages/sandbox'

export const sandboxRoutes = {
  [AppRoutes.Sandbox]: {
    path: 'sandbox',
    element: (
      <RouterPage>
        <SandBoxPage />
      </RouterPage>
    ),
  },
  [AppRoutes.SandboxIcons]: {
    path: 'sandbox/icons',
    element: (
      <RouterPage>
        <SandBoxPageIcons />
      </RouterPage>
    ),
  },
}
