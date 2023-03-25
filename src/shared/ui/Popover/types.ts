import type { ReactNode } from 'react'
import type { Placement as FloatingPlacement } from '@floating-ui/react-dom'

export type Offset = {
  side: number
  align: number
}

export type Delay = {
  enter: number
  leave: number
}

export type Placement = FloatingPlacement

export type Trigger = 'click' | 'hover'

export interface TypeWithChidlren {
  children: ReactNode
}
