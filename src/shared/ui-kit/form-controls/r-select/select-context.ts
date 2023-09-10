import { createContext } from 'react'

const COMPONENT_NAME = 'SelectContext'

type SelectType = string | number

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
