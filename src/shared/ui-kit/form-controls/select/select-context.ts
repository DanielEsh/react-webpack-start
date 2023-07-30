import { createContext } from 'react'

const COMPONENT_NAME = 'SelectContext'

export interface SelectContextValues {
  selectedValue?: string | number
  changeSelectedValue: (value: string | number) => void
}

export const SelectContext = createContext<SelectContextValues>({
  changeSelectedValue: () => {
    throw new Error('not implemented')
  },
})

SelectContext.displayName = COMPONENT_NAME
