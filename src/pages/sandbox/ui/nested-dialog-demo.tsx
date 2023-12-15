import { Button, Modal } from 'shared/ui-kit'
import { useDisclosure } from 'shared/lib/hooks/useDisclosure'

export const NestedDialogDemo = () => {
  const [opened, { close, open }] = useDisclosure()
  const [nestedModalOpened, { close: closeNested, open: openNested }] =
    useDisclosure()

  return (
    <>
      <Button onClick={open}>Open dialog</Button>

      <Modal
        open={opened}
        onOpenChange={close}
      >
        <div>
          <Button onClick={openNested}>Open nested modal</Button>

          <Modal
            open={nestedModalOpened}
            onOpenChange={closeNested}
          >
            <div className="bg-amber-400 p-8">nested modal</div>
          </Modal>
        </div>
      </Modal>
    </>
  )
}
