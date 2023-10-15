import { Link, useNavigate } from 'react-router-dom'
import { useGetUserInfo } from 'entities/user/api/queries/use-get-user-info'
import { Button } from 'shared/ui-kit'
import { useLogoutMutation } from 'features/auth/api/queries/use-logout-mutation'

export const HeaderUser = () => {
  const navigate = useNavigate()
  const { isLoading, isError, isSuccess, data } = useGetUserInfo()
  const { mutateAsync: logout } = useLogoutMutation()

  const handleLogOutClick = async () => {
    console.log('log out')
    await logout()
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
            <span>{data.name}</span>
            <span>email.com</span>
          </div>
        </Link>
      )}
      <Button onClick={handleLogOutClick}>Выйти</Button>
    </>
  )
}
