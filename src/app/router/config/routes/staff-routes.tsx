import { AppRoutes } from 'app/router/config/constants'
import { RouterPage } from 'app/router/ui/router-page'
import StaffPage from 'pages/staff/staff-page'
import StaffCreatePage from 'pages/staff/staff-create-page'

export const staffRoutes = {
  [AppRoutes.Staff]: {
    path: 'staff',
    element: (
      <RouterPage>
        <StaffPage />
      </RouterPage>
    ),
    children: {
      [AppRoutes.StaffCreate]: {
        path: 'create',
        element: (
          <RouterPage>
            <StaffCreatePage />
          </RouterPage>
        ),
      },
    },
  },
}
