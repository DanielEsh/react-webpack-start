import { Outlet } from 'react-router-dom'
import { Sidebar } from 'widgets/Sidebar'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'

export default function RootLayout() {
  return (
    <div className="app flex w-full">
      <Sidebar />

      <div className="content relative w-full">
        <Header />

        <div className="page">
          ROOT LAYOUT
          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  )
}
