import { Popover as HPopover } from '@headlessui/react'
import { useGetUserInfo } from 'entities/user/api/queries/use-get-user-info'

export const HeaderUser = () => {
  const { isLoading, isError, isSuccess, data } = useGetUserInfo()

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isSuccess && <div>{data.name}</div>}
      <HPopover>
        <HPopover.Button>
          <div>Button</div>
        </HPopover.Button>
        <HPopover.Panel>
          <div className="flex flex-col bg-blue-500">
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </div>
        </HPopover.Panel>
      </HPopover>
    </>
  )
}
