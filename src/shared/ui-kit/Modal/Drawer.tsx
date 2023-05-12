import { Modal, type ModalProps } from './Modal'

export type DrawerProps = ModalProps

const COMPONENT_NAME = 'Drawer'

export const Drawer = (props: DrawerProps) => {
  const { opened, onClose, children, ...restProps } = props

  return (
    <Modal
      className="absolute top-0 right-0 h-full w-[880px] bg-white p-4"
      opened={opened}
      onClose={onClose}
      {...restProps}
    >
      {children}
    </Modal>
  )
}

Drawer.displayName = COMPONENT_NAME
