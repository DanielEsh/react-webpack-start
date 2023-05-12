import { Modal, type ModalProps } from './Modal'

export type DialogProps = Omit<ModalProps, 'clickOutSideCanClose'>

const COMPONENT_NAME = 'Dialog'

export const Dialog = (props: DialogProps) => {
  const { opened, onClose, children, ...restProps } = props

  return (
    <Modal
      className="absolute top-1/2 right-1/2 h-full w-[880px] bg-white p-4"
      opened={opened}
      clickOutSideCanClose={false}
      onClose={onClose}
      {...restProps}
    >
      {children}
    </Modal>
  )
}

Dialog.displayName = COMPONENT_NAME
