import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api'
import { StaffDto } from 'entities/staff/api/dto'

export const getStaff = async (params: PageableResponseParams) => {
  const query = `staff?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<StaffDto>>(query)).data
}
