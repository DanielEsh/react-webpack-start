import { Portal } from 'shared/ui-kit/Portal/Portal'
import { classNames } from 'shared/utils'
import { useClickOutside } from 'shared/lib/hooks/useClickOutside'
import type { UiDefaultProps } from '../types'
import { CloseButton } from './CloseButton'
import { ModalOverlay } from './ModalOverlay'

interface ModalProps extends UiDefaultProps {
  opened: boolean
  clickOutSideCanClose?: boolean
  onClose?: () => void
}

const COMPONENT_NAME = 'Modal'

export const Modal = (props: ModalProps) => {
  const {
    opened,
    className,
    clickOutSideCanClose = true,
    children,
    onClose,
  } = props

  const classes = classNames(
    'absolute top-0 right-0 w-[880px] h-full p-4 bg-white',
    className,
  )

  const handleClose = () => {
    if (!onClose) return

    onClose()
  }

  const handleClickOutside = () => {
    if (!clickOutSideCanClose) return

    handleClose()
  }

  const outsideRef = useClickOutside(handleClickOutside)

  return opened ? (
    <Portal>
      <ModalOverlay>
        <div
          ref={outsideRef}
          className={classes}
        >
          <CloseButton onClick={handleClose} />
          {children}
        </div>
      </ModalOverlay>
    </Portal>
  ) : null
}

Modal.displayName = COMPONENT_NAME
