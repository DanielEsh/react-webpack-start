import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { Button } from 'shared/ui-kit/button'
import { Drawer } from 'shared/ui-kit/drawer'
import { DrawerContent } from 'shared/ui-kit/drawer/drawer'
import { SelectDemo } from './SelectExample'

export const DrawerDemo = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button onClick={open}>Drawer open</Button>
      <Drawer
        open={opened}
        onOpenChange={close}
      >
        <DrawerContent>
          <div>
            <span>Drawer example </span>
            <SelectDemo />
          </div>
        </DrawerContent>
      </Drawer>
    </>
  )
}
