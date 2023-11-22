import { Outlet } from 'react-router-dom'

export default function StaffPage() {
  return (
    <div>
      <div>
        <span>Staff</span>
      </div>

      <Outlet />
    </div>
  )
}
