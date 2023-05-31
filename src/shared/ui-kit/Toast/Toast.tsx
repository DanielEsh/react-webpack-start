import { ToastType } from './types'
import { ToastCloseButton } from './ToastCloseButton'
import { hide } from 'shared/ui-kit/Toast/event'

const COMPONENT_NAME = 'Toast'

interface Props {
  toast: ToastType
  index: number
}

export const Toast = (props: Props) => {
  const {
    toast: { message, title },
    index,
  } = props

  const handleClose = () => {
    hide(index)
  }

  return (
    <li
      className="rounded-md bg-blue-500 p-2"
      key={index}
    >
      <div>{title}</div>
      <div>{message}</div>
      <ToastCloseButton onClick={handleClose} />
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
