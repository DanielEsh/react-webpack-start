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

  const classes = classNames(
    'absolute top-0 right-0 w-[880px] h-full p-4 bg-white',
    className,
  )

  const handleClose = () => {
    if (!onClose) return

    onClose()
  }

  return opened ? (
    <Portal>
      <div className="fixed inset-0 overflow-hidden bg-neutral-800/50">
        <div className={classes}>
          <button onClick={handleClose}>Close</button>
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}

Modal.displayName = COMPONENT_NAME
