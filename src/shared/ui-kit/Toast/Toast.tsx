import { NotificationType } from './event'

const COMPONENT_NAME = 'Toast'

export const Toast = (props: NotificationType) => {
  const { id, title, message } = props

  return (
    <li
      className="rounded-md bg-blue-500 p-2"
      key={id}
    >
      <div>{title}</div>
      <div>{message}</div>
    </li>
  )
}

Toast.displayName = COMPONENT_NAME
