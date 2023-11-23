import { PaginatedDataView } from 'widgets/data-view'
import { staffDataTableColumns } from 'entities/staff/ui/staff-data-table/staff-data-table-columns'
import { useGetAllStaff } from 'entities/staff/api/queries/use-get-all-staff-query'
import { StaffDataTableHeader } from 'entities/staff/ui/staff-data-table/staff-data-table-header'

export const StaffDataTable = () => {
  const { isSuccess, data } = useGetAllStaff({
    page: 1,
    limit: 10,
    sort_by: [],
    order_by: [],
  })

  return (
    <div>
      <StaffDataTableHeader />

      {isSuccess && data.meta && (
        <PaginatedDataView
          data={data?.content ?? []}
          columns={staffDataTableColumns}
          meta={{ totalPages: data?.meta.pagination.totalPages }}
        />
      )}
    </div>
  )
}
