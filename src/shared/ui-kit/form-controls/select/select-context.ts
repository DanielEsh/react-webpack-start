import { createContext } from 'react'
import type { SelectType } from './types'

const COMPONENT_NAME = 'SelectContext'

export interface SelectContextValues {
  value?: SelectType
  changeValue: (value: SelectType) => void
  label?: string
}

export const SelectContext = createContext<SelectContextValues>({
  changeValue: () => {
    throw new Error('not implemented')
  },
})

SelectContext.displayName = COMPONENT_NAME
