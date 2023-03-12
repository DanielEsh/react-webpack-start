export const Sidebar = () => {
  return (
    <div className="relative h-screen min-w-[280px]">
      <div className="fixed flex h-screen w-[280px] flex-col gap-6 bg-neutral-300 p-4">
        <div className="flex h-12 w-full items-center justify-center rounded bg-neutral-800 text-white">
          LOGO
        </div>

        <div className="flex h-[400px] w-full items-center justify-center rounded bg-neutral-800 text-white">
          MENU
        </div>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex h-12 w-full items-center justify-center rounded bg-neutral-800 text-white">
            THEME SWICHER
          </div>
          <div className="flex h-12 w-full items-center justify-center rounded bg-neutral-800 text-white">
            LANG SWICHER
          </div>
        </div>
      </div>
    </div>
  )
}
