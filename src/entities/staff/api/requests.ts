import qs from 'qs'
import { $api } from 'shared/api/api'
import { PageableResponse, PageableResponseParams } from 'shared/api'
import { CreateStaffDto, StaffDto } from 'entities/staff/api/dto'

export const createStaff = async (createStaffDto: CreateStaffDto) => {
  return (await $api.post(`/staff`, createStaffDto)).data
}

export const getStaff = async (params: PageableResponseParams) => {
  const query = `staff?${qs.stringify(params)}`
  return (await $api.get<PageableResponse<StaffDto>>(query)).data
}
