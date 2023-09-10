import { TypeWithChildren } from 'shared/ui-kit/types'

export const ModalOverlay = ({ children }: TypeWithChildren) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-neutral-800/50">
      {children}
    </div>
  )
}
