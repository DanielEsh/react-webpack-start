import { createContext } from 'react'
import { SelectType } from 'shared/ui-kit/form-controls/select/types'

const COMPONENT_NAME = 'SelectContext'

export interface SelectContextValues {
  selectedValue?: SelectType
  changeSelectedValue: (value: SelectType) => void
}

export const SelectContext = createContext<SelectContextValues>({
  changeSelectedValue: () => {
    throw new Error('not implemented')
  },
})

SelectContext.displayName = COMPONENT_NAME
