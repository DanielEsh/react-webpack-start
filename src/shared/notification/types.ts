import { ReactNode } from 'react'

export type NotificationVariants =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'destructive'
  | null

export interface NotificationType {
  id: string
  title: string
  message: ReactNode
  type?: NotificationVariants
  autoClose?: boolean
  duration?: number
  onClose?(): void
  onOpen?(): void
}

type RequiredValues = Required<Omit<NotificationType, 'onClose' | 'onOpen'>>

type EventsValues = Pick<NotificationType, 'onClose' | 'onOpen'>

export type CreatedNotificationType = RequiredValues & EventsValues
