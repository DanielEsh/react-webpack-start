import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'

interface FormProps extends UiDefaultProps {
  onSubmit: () => void
  onReset?: () => void
}

const COMPONENT_NAME = 'Form'

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (props, forwardedRef) => {
    const { children, className, onSubmit, onReset } = props

    return (
      <form
        className={className}
        ref={forwardedRef}
        onSubmit={onSubmit}
        onReset={onReset}
      >
        {children}
      </form>
    )
  },
)

Form.displayName = COMPONENT_NAME
