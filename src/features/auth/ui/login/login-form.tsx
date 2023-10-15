import { Button, Form, Input } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { loginFormSchema, type LoginFormSchemaType } from './login-form-schema'
import { useLoginMutation } from 'features/auth/api/queries/use-login-mutation'

export const LoginForm = () => {
  const defaultValues: LoginFormSchemaType = {
    username: '',
    password: '',
  }

  const formMethods = useForm(loginFormSchema, defaultValues)

  const { mutateAsync: loginMutation } = useLoginMutation()

  const handleSubmit = async (form: LoginFormSchemaType) => {
    console.log('SUBMIT', form)
    await loginMutation(form)
  }

  return (
    <Form
      className="flex w-[360px] flex-col gap-4"
      methods={formMethods}
      onSubmit={handleSubmit}
    >
      <h1>Login Page</h1>

      <Form.Field name="username">
        <Input label="name" />
      </Form.Field>

      <Form.Field name="password">
        <Input label="password" />
      </Form.Field>

      <Button
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  )
}
