import { Portal } from 'shared/ui/Portal/Portal'
import { classNames } from 'shared/utils'
import { UiDefaultProps } from '../types'

interface ModalProps extends UiDefaultProps {
  opened: boolean
  onClose?: () => void
}

const COMPONENT_NAME = 'Modal'

export const Modal = (props: ModalProps) => {
  const { opened, className, children, onClose } = props

  const classes = classNames('modal', className)

  const handleClose = () => {
    if (!onClose) return

    onClose()
  }

  return opened ? (
    <Portal>
      <div className="fixed inset-0 overflow-hidden bg-neutral-800/50">
        <button onClick={handleClose}>Close</button>
        <div className={classes}>{children}</div>
      </div>
    </Portal>
  ) : null
}

Modal.displayName = COMPONENT_NAME
