import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { useForm, FormProvider } from 'react-hook-form'

interface FormProps extends UiDefaultProps {
  onSubmit: () => void
  onReset?: () => void
}

const COMPONENT_NAME = 'Form'

export const Form = forwardRef<HTMLFormElement, FormProps>(
  (props, forwardedRef) => {
    const { children, className, onSubmit, onReset } = props

    const methods = useForm()

    return (
      <FormProvider {...methods}>
        <form
          className={className}
          ref={forwardedRef}
          onSubmit={methods.handleSubmit(onSubmit)}
          onReset={onReset}
        >
          {children}
        </form>
      </FormProvider>
    )
  },
)

Form.displayName = COMPONENT_NAME
