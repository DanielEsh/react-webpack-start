import { Modal, type ModalProps } from '../modal'
import { Button } from '../button'

export interface DialogProps
  extends Omit<ModalProps, 'clickOutSideCanClose' | 'children'> {
  onConfirm: () => void
  onCancel?: () => void
}

const COMPONENT_NAME = 'Dialog'

export const Dialog = (props: DialogProps) => {
  const {
    opened,
    onClose = () => null,
    onCancel = () => null,
    onConfirm,
    ...restProps
  } = props

  const handleButtonClick = (type: 'cancel' | 'confirm') => {
    type === 'cancel' ? onCancel() : onConfirm()
    onClose()
  }

  return (
    <Modal
      className="absolute top-1/2 left-1/2 h-[248px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-4"
      opened={opened}
      persistent
      onClose={onClose}
      {...restProps}
    >
      <h2>Подтверждение удаления</h2>
      <p className="mt-2">Вы действительно хотите удалить элемент?</p>
      <div className="flex h-full items-center justify-center gap-3">
        <Button onClick={() => handleButtonClick('cancel')}>Отменить</Button>
        <Button
          variant="primary"
          onClick={() => handleButtonClick('confirm')}
        >
          Подтвердить
        </Button>
      </div>
    </Modal>
  )
}

Dialog.displayName = COMPONENT_NAME
