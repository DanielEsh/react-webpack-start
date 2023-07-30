import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { FormProvider } from 'react-hook-form'

interface FormProps extends UiDefaultProps {
  methods: any
  onSubmit: (event: any) => void
  onReset?: () => void
}

const COMPONENT_NAME = 'Form'

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (props, forwardedRef) => {
    const { children, className, methods, onSubmit, onReset } = props

    return (
      <FormProvider {...methods}>
        <form
          ref={forwardedRef}
          className={className}
          onReset={onReset}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          {children}
        </form>
      </FormProvider>
    )
  },
)

Form.displayName = COMPONENT_NAME
