import { Outlet } from 'react-router-dom'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { AppSidebar } from './root-layout/ui/app-sidebar'

export default function RootLayout() {
  return (
    <div className="app flex w-full">
      <AppSidebar />

      <div className="content relative w-full">
        <Header />

        <div className="page p-6">
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}
