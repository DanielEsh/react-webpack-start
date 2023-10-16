import { Outlet } from 'react-router-dom'
import { useStore } from 'effector-react'
import { Sidebar } from 'widgets/Sidebar'
import { Header } from 'widgets/Header'
import { Footer } from 'widgets/Footer'
import { $appStore } from 'widgets/layouts/app-store/model'

export default function RootLayout() {
  const appStore = useStore($appStore)
  console.log('APP STORE', appStore)

  return (
    <div className="app flex w-full">
      <Sidebar />

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
