import { useEffect, useRef } from 'react'
import { Toast } from 'shared/ui-kit/Toast'
import { NotificationType } from './types'

const COMPONENT_NAME = 'Notification'

interface Props {
  notification: NotificationType
  onHide(id: string): void
}

export const Notification = (props: Props) => {
  const { notification, onHide } = props
  const hideTimeout = useRef(0)

  const handleHide = () => {
    onHide(notification.id)
    window.clearTimeout(hideTimeout.current)
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
  }

  const handleDelayedHide = () => {
    hideTimeout.current = window.setTimeout(handleHide, notification.duration)
  }

  useEffect(() => {
    handleDelayedHide()
    return cancelDelayedHide
  }, [notification.autoClose, notification.duration])

  return (
    <Toast
      type={notification.type}
      title={notification.title}
      message={notification.message}
      onClose={handleHide}
    />
  )
}

Notification.displayName = COMPONENT_NAME
