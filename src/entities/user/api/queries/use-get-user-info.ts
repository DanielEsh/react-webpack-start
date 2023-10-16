import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from 'entities/user/api/requests'
import { fillUser } from 'widgets/layouts/app-store/model'

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUserInfo(),
    onSuccess: (data) => fillUser(data),
  })
}
