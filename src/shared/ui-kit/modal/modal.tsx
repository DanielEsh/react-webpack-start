import { Portal } from 'shared/ui-kit/Portal/Portal'
import { classNames } from 'shared/utils'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside'
import type { UiDefaultProps } from '../types'
import { ModalOverlay } from './ModalOverlay'
import { ModalContext } from './modal-context'
import { ModalHeader } from './modal-header'

export interface ModalProps extends UiDefaultProps {
  opened: boolean
  persistent?: boolean
  onClose?: () => void
}

const COMPONENT_NAME = 'Modal'

export const Modal = (props: ModalProps) => {
  const { opened, className, persistent = false, children, onClose } = props

  const classes = classNames('', className)

  const handleClose = () => {
    if (!onClose) return

    onClose()
  }

  const handleClickOutside = () => {
    if (persistent) return

    handleClose()
  }

  const outsideRef = useClickOutside(handleClickOutside)

  const modalContextValues = {
    onClose: handleClose,
  }

  return opened ? (
    <ModalContext.Provider value={modalContextValues}>
      <Portal>
        <ModalOverlay>
          <div
            ref={outsideRef}
            className={classes}
          >
            {children}
          </div>
        </ModalOverlay>
      </Portal>
    </ModalContext.Provider>
  ) : null
}

Modal.displayName = COMPONENT_NAME

Modal.Header = ModalHeader
