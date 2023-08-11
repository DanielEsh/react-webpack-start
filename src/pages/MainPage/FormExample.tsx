import { Button } from 'shared/ui-kit/button'
import { Form } from 'shared/ui-kit/form/form'
import { useForm } from 'shared/ui-kit/form/use-form'
import { z } from 'zod'
import { FormField } from 'shared/ui-kit/form/form-field'
import { Input } from 'shared/ui-kit/form-controls'

const formSchema = z.object({
  field: z.string().nonempty({
    message: 'Field must be required',
  }),
})

type FormSchemaType = z.infer<typeof formSchema>

const formDefaultValues: FormSchemaType = {
  field: '',
}
export const FormExample = () => {
  const formMethods = useForm(formSchema, formDefaultValues)

  const handleFormSubmit = (form: any) => {
    console.log('submit', form)
  }

  return (
    <Form
      methods={formMethods}
      onSubmit={handleFormSubmit}
    >
      <FormField name="field">
        <Input label="field" />
      </FormField>
      <Button type="submit">submit</Button>
    </Form>
  )
}
