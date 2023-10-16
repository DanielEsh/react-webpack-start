import { Link, useNavigate } from 'react-router-dom'
import { useGetUserInfo } from 'entities/user/api/queries/use-get-user-info'
import { Button } from 'shared/ui-kit'
import { useLogoutMutation } from 'features/auth/api/queries/use-logout-mutation'
import { useStore } from 'effector-react'
import { $appStore, logout } from 'widgets/layouts/app-store/model'

export const HeaderUser = () => {
  const appStore = useStore($appStore)
  const navigate = useNavigate()
  const { isLoading, isError, isSuccess } = useGetUserInfo()
  const { mutateAsync: logoutMutation } = useLogoutMutation()

  const handleLogOutClick = async () => {
    console.log('log out')
    await logoutMutation()
    logout()
    navigate('/login')
  }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error...</div>}
      {isSuccess && (
        <Link
          to={'/profile'}
          className="flex items-center gap-4"
        >
          <div className="h-[40px] w-[40px] rounded-full bg-amber-100"></div>
          <div className="flex flex-col">
            <span>{appStore?.user?.name}</span>
            <span>email.com</span>
          </div>
        </Link>
      )}
      <Button onClick={handleLogOutClick}>Выйти</Button>
    </>
  )
}
