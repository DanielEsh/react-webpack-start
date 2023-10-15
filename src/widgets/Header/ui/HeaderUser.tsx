import { Link } from 'react-router-dom'
import { useGetUserInfo } from 'entities/user/api/queries/use-get-user-info'

export const HeaderUser = () => {
  const { isLoading, isError, isSuccess, data } = useGetUserInfo()

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
    </>
  )
}
