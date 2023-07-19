import { ReactNode } from 'react'

export type NotificationVariants =
  | 'default'
  | 'success'
  | 'error'
  | 'warning'
  | 'destructive'
  | null

export interface Notification {
  id: string
  title: string
  message: ReactNode
  type?: NotificationVariants
  autoClose?: boolean
  duration?: number
  onClose?(): void
  onOpen?(): void
}

type RequiredValues = Required<Omit<Notification, 'onClose' | 'onOpen'>>

type EventsValues = Pick<Notification, 'onClose' | 'onOpen'>

export type CreatedNotification = RequiredValues & EventsValues
