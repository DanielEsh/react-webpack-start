import { Modal, type ModalProps } from 'shared/ui-kit/Modal'

export type DrawerProps = ModalProps

const COMPONENT_NAME = 'UiKitDrawer'

export const UiKitDrawer = (props: DrawerProps) => {
  const { opened, onClose, children, ...restProps } = props

  return (
    <Modal
      className="absolute top-0 right-0 h-full w-[880px] bg-white"
      opened={opened}
      onClose={onClose}
      {...restProps}
    >
      {children}
    </Modal>
  )
}

UiKitDrawer.displayName = COMPONENT_NAME
