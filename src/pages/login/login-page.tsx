import { Button, Input } from 'shared/ui-kit'

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full">
      <aside className="h-full p-[120px]">
        <div className="flex w-[360px] flex-col gap-4">
          <h1>Login Page</h1>
          <Input label="name" />
          <Input label="password" />

          <Button variant="primary">Submit</Button>
        </div>
      </aside>
      <div className="h-full w-full p-6">
        <div className="h-full w-full rounded-lg bg-gray-900"></div>
      </div>
    </div>
  )
}
