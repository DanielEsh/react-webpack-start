import { Outlet } from 'react-router-dom'
import { useGetAllStaff } from 'entities/staff/queries/use-get-all-staff-query'

export default function StaffPage() {
  const { isSuccess, data } = useGetAllStaff({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <div>
      <div>
        <span>Staff</span>
      </div>

      <div>{isSuccess && <div>{data?.content.length}</div>}</div>

      <Outlet />
    </div>
  )
}
