import type { ReactNode } from 'react'

export interface TypeWithChidlren {
  children: ReactNode
}

export interface UiDefaultProps extends TypeWithChidlren {
  className?: string
}
