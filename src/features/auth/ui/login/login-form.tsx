import { Button, Form, Input } from 'shared/ui-kit'
import { useForm } from 'shared/ui-kit/form/use-form'
import { loginFormSchema, type LoginFormSchemaType } from './login-form-schema'
import { useLogin } from 'features/auth/use-login'
export const LoginForm = () => {
  const defaultValues: LoginFormSchemaType = {
    username: 'new user',
    password: '12345',
  }

  const login = useLogin()
  const formMethods = useForm(loginFormSchema, defaultValues)

  const handleSubmit = async (form: LoginFormSchemaType) => {
    await login(form)
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
