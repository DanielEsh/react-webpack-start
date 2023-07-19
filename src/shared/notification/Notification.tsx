import { useEffect, useRef } from 'react'
import { Toast } from 'shared/ui-kit/Toast'
import { CreatedNotificationType } from './types'

const COMPONENT_NAME = 'Notification'

interface Props {
  notification: CreatedNotificationType
  onHide(id: string): void
}

export const Notification = (props: Props) => {
  const { notification, onHide } = props
  const hideTimeout = useRef(0)

  const handleHide = () => {
    onHide(notification.id)
    notification.onClose && notification.onClose()
    window.clearTimeout(hideTimeout.current)
  }

  const cancelDelayedHide = () => {
    clearTimeout(hideTimeout.current)
  }

  const handleDelayedHide = () => {
    hideTimeout.current = window.setTimeout(
      handleHide,
      notification.duration * 1000,
    )
  }

  useEffect(() => {
    notification.onOpen && notification.onOpen()
  }, [])

  useEffect(() => {
    handleDelayedHide()
    return cancelDelayedHide
  }, [notification.autoClose, notification.duration])

  return (
    <Toast
      type={notification.type}
      title={notification.title}
      message={notification.message}
      onMouseEnter={cancelDelayedHide}
      onMouseLeave={handleDelayedHide}
      onClose={handleHide}
    />
  )
}

Notification.displayName = COMPONENT_NAME
