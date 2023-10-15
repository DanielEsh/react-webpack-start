import { HeaderUser } from './HeaderUser'

export const Header = () => {
  return (
    <div className="flex h-[64px] justify-between gap-3 bg-neutral-800 px-6 text-white">
      <div className="flex gap-3"></div>

      <div className="flex items-center gap-3">
        <HeaderUser />
      </div>
    </div>
  )
}
