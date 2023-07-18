import { ReactNode } from 'react'

export interface NotificationType {
  id: string
  title: string
  message: ReactNode
  type: 'default' | 'success' | 'error' | 'warning' | 'destructive' | null
  autoClose?: boolean
  duration?: number
  onClose?(props: NotificationType): void
  onOpen?(props: NotificationType): void
}

export type CreatedNotificationType = Required<NotificationType>
