import { Button } from 'shared/ui-kit/Button'
import { Form } from 'shared/ui-kit/form/form'
import { useForm } from 'shared/ui-kit/form/use-form'
import { z } from 'zod'
import { Controller } from 'react-hook-form'
import { Input } from 'shared/ui-kit/input'

const formSchema = z.object({
  field: z.string().nonempty({
    message: 'Field must be required',
  }),
})

type FormSchemaType = z.infer<typeof formSchema>
export const FormExample = () => {
  const formMethods = useForm(formSchema)

  const handleFormSubmit = (form: any) => {
    console.log('submit', form)
  }

  return (
    <Form
      methods={formMethods}
      onSubmit={handleFormSubmit}
    >
      <div>
        <Controller
          render={({ field, fieldState }) => (
            <Input
              label="field"
              invalid={fieldState.invalid}
              {...field}
            />
          )}
          control={formMethods.control}
          name="field"
        />

        <div className="error">ERRORS</div>
      </div>
      <Button type="submit">submit</Button>
    </Form>
  )
}
