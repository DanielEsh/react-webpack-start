import { useDisclosure } from 'shared/lib/hooks/useDisclosure'
import { Button } from 'shared/ui-kit/button'
import { Modal, ModalContent } from 'shared/ui-kit/modal'

export function ModalDemo() {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button onClick={open}>Edit Profile</Button>

      <Modal
        open={opened}
        onOpenChange={close}
      >
        <ModalContent className="sm:max-w-[425px]">
          <span>body</span>
        </ModalContent>
      </Modal>
    </>
  )
}
