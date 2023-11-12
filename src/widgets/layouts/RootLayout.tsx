import { Outlet } from 'react-router-dom'
import { Footer } from 'widgets/Footer'
import { AppSidebar } from './root-layout/ui/app-sidebar'
import { AppHeader } from './root-layout/ui/app-header'

export default function RootLayout() {
  return (
    <div className="app flex w-full">
      <AppSidebar />

      <div className="content relative w-full">
        <AppHeader />

        <div className="page p-6">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}
