import { Popover as HPopover } from '@headlessui/react'

export const HeaderUser = () => {
  return (
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
  )
}
