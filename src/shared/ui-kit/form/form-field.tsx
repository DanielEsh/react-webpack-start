import { Children, isValidElement, cloneElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { UiDefaultProps } from 'shared/ui-kit/types'

interface FormFieldProps extends UiDefaultProps {
  name: string
}
export const FormField = (props: FormFieldProps) => {
  const { children, className, name } = props
  const { control } = useFormContext()

  const childrenWithFormFieldProps = (fieldProps: any) => {
    return Children.map(children, (child) => {
      // Checking isValidElement is the safe way and avoids a
      // typescript error too.
      if (isValidElement(child)) {
        return cloneElement(child, fieldProps)
      }
      return child
    })
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <div className={className}>
          {childrenWithFormFieldProps({
            invalid: fieldState.invalid,
            ...field,
          })}

          <div className="text-red-500">{fieldState.error?.message}</div>
        </div>
      )}
    />
  )
}
