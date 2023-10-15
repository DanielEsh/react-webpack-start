import { LoginForm } from 'features/auth/ui/login/login-form'

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      <aside className="h-full p-[120px]">
        <LoginForm />
      </aside>
      <div className="h-full w-full p-6">
        <div className="h-full w-full rounded-lg bg-gray-900"></div>
      </div>
    </div>
  )
}
