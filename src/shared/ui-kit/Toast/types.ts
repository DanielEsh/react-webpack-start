import { ReactNode } from 'react'

export interface ToastType {
  id: string
  title: string
  message: ReactNode
  type?: 'default' | 'success' | 'error' | 'warning'
}
