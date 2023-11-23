import { PageableResponse } from 'shared/api'
import { useQuery } from '@tanstack/react-query'
import { getStaff } from '../requests'
import { StaffDto } from 'entities/staff/api/dto'

interface Values {
  page: number
  limit: number
  sort_by?: string[]
  order_by?: string[]
}

export const useGetAllStaff = (
  values: Values,
  onSuccess?: (data: PageableResponse<StaffDto>) => void,
) => {
  return useQuery({
    queryKey: ['staff', values],
    queryFn: () => getStaff(values),
    keepPreviousData: true,
    onSuccess,
  })
}
