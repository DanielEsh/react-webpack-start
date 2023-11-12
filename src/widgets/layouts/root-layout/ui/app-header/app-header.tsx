import { AppHeaderUser } from './app-header-user'

export const AppHeader = () => {
  return (
    <div className="flex h-[64px] justify-between gap-3 border-b border-neutral-300 px-6">
      <div className="flex gap-3"></div>

      <div className="flex items-center gap-3">
        <AppHeaderUser />
      </div>
    </div>
  )
}
