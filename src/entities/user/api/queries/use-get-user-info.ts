import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from 'entities/user/api/requests'

export const useGetUserInfo = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => getUserInfo(),
  })
}
