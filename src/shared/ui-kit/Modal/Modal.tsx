import { Portal } from 'shared/ui-kit/Portal/Portal'
import { classNames } from 'shared/utils'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside'
import { UiDefaultProps } from '../types'
import { CloseButton } from './CloseButton'

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

  const outsideRef = useClickOutside(handleClose)

  return opened ? (
    <Portal>
      <div className="fixed inset-0 overflow-hidden bg-neutral-800/50">
        <div
          ref={outsideRef}
          className={classes}
        >
          <CloseButton onClick={handleClose} />
          {children}
        </div>
      </div>
    </Portal>
  ) : null
}

Modal.displayName = COMPONENT_NAME
