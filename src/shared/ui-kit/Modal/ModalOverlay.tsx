import { ReactNode } from 'react'

export const ModalOverlay = ({ children }: { children: ReactNode }) => {
  return (
    <div className="fixed inset-0 overflow-hidden bg-neutral-800/50">
      {children}
    </div>
  )
}
