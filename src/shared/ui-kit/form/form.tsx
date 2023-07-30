import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import {
  FormProvider,
  type FieldValues as ReactHookFormFieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form'
import { FormField } from './form-field'

export interface FormProps<FieldValues extends ReactHookFormFieldValues>
  extends UiDefaultProps {
  methods: UseFormReturn<FieldValues>
  onReset?: () => void
  onSubmit: SubmitHandler<FieldValues>
}

const COMPONENT_NAME = 'Form'

export const _Form = forwardRef<HTMLFormElement, FormProps<any>>(
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

export const Form = Object.assign(_Form, {
  Field: FormField,
})

Form.displayName = COMPONENT_NAME
