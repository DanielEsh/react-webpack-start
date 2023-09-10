import { useContext } from 'react'
import { ModalContext } from './modal-context'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { ModalCloseButton } from 'shared/ui-kit/modal/modal-close-button'

export const ModalHeader = ({ className, children }: UiDefaultProps) => {
  const { onClose } = useContext(ModalContext)

  return (
    <header className={className}>
      <ModalCloseButton onClick={onClose} />
      {children}
    </header>
  )
}
