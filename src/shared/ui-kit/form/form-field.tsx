import { Controller, useFormContext } from 'react-hook-form'
import { Input } from 'shared/ui-kit/input'
interface FormFieldProps {
  control?: any
}
export const FormField = (props: FormFieldProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name="field"
      render={({ field, fieldState }) => (
        <div>
          <Input
            label="field"
            invalid={fieldState.invalid}
            {...field}
          />

          <div className="error">{fieldState.error?.message}</div>
        </div>
      )}
    />
  )
}
