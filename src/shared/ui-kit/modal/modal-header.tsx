import { useContext } from 'react'
import { ModalContext } from './modal-context'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { CloseButton } from 'shared/ui-kit/modal/CloseButton'

export const ModalHeader = ({ className, children }: UiDefaultProps) => {
  const { onClose } = useContext(ModalContext)

  return (
    <header className={className}>
      <CloseButton onClick={onClose} />
      {children}
    </header>
  )
}
