import { Link, useNavigate } from 'react-router-dom'
import { useGetUserInfo } from 'entities/user/api/queries/use-get-user-info'
import { Button, Divider } from 'shared/ui-kit'
import { useLogoutMutation } from 'features/auth/api/queries/use-logout-mutation'
import { useStore } from 'effector-react'
import { $appStore, logout } from 'widgets/layouts/app-store/model'
import { Dropdown } from 'shared/ui-kit/dropdown'

export const AppHeaderUser = () => {
  const appStore = useStore($appStore)
  const navigate = useNavigate()
  const { isLoading, isError, isSuccess } = useGetUserInfo()
  const { mutateAsync: logoutMutation } = useLogoutMutation()

  const handleLogOutClick = async () => {
    console.log('log out')
    await logoutMutation()
    logout()
    // navigate('/login')
  }

  return (
    <>
      <Dropdown>
        <Dropdown.Trigger
          asChild={false}
          className="flex items-center gap-3"
        >
          <div className="h-[40px] w-[40px] rounded-full bg-amber-100"></div>
          <div className="flex flex-col items-start">
            <span>Иванов И.И</span>
            <span>ivanovii@ecommerce.ru</span>
          </div>
        </Dropdown.Trigger>

        <Dropdown.Content>
          <div className="flex items-center gap-3 p-4">
            <div className="h-[80px] w-[80px] rounded-full bg-amber-100"></div>
            <div className="flex flex-col items-start">
              <span>Иванов И.И</span>
              <span>Старший менеджер</span>
              <span>ivanovii@ecommerce.ru</span>
            </div>
          </div>

          <Divider />
          <div className="flex items-center gap-3 p-4">
            <div className="h-[48px] w-[48px] rounded-md bg-neutral-900"></div>
            <div>
              <p>Profile</p>
              <p>Account settings</p>
            </div>
          </div>

          <Divider />
          <div className="p-4">
            <Button onClick={handleLogOutClick}>Выйти</Button>
          </div>
        </Dropdown.Content>
      </Dropdown>
    </>
  )
}
