import { PropsWithChildren } from 'react'
import { Portal } from '../Portal'
import { useList } from 'effector-react'
import { $notifications } from './event'

type ToastViewportProps = PropsWithChildren

const COMPONENT_NAME = 'ToastRoot'

export const ToastRoot = () => {
  const toasts = useList($notifications, (toast) => (
    <div key={toast.id}>
      <div>{toast.title}</div>
      <div>{toast.message}</div>
    </div>
  ))

  console.log('TOAST', toasts)

  return (
    <Portal>
      <div className="fixed top-[16px] right-[16px] flex flex-col">
        {toasts}
      </div>
    </Portal>
  )
}

ToastRoot.displayName = COMPONENT_NAME
