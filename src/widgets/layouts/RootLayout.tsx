import { Outlet } from 'react-router-dom'
import { AppSidebar } from './root-layout/ui/app-sidebar'
import { AppHeader } from './root-layout/ui/app-header'
import { AppFooter } from './root-layout/ui/app-footer'

export default function RootLayout() {
  return (
    <div className="app flex w-full">
      <AppSidebar />

      <div className="content relative w-full">
        <AppHeader />

        <div className="page p-6">
          <Outlet />
        </div>

        <AppFooter />
      </div>
    </div>
  )
}
