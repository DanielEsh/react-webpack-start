import { attributesDataTableColumns } from './attributes-data-table-columns'
import { PaginatedDataView } from 'widgets/data-view/paginated-data-view'
import { DataTableState } from 'widgets/data-table/model'
import { Attribute } from 'entities/attributes/types'
import { useInvalidateAttributes } from 'entities/attributes/api/queries/use-invalidate-attributes'
import { useNotification } from 'shared/notification'
import { useDeleteAttributeMutation } from 'entities/attributes/api/queries/use-delete-attribute-mutation'
import { AttributeDto } from 'entities/attributes/api/types'
import {
  ConfirmDeleteDialog,
  DeleteState,
} from 'shared/ui/dialog/confirm-delete'

interface Props {
  data: Attribute[]
  totalPages: number
  onChange?(state: DataTableState): void
}

export const AttributesDataTable = ({ data, totalPages, onChange }: Props) => {
  const { mutate: deleteAttributeMutation } = useDeleteAttributeMutation()
  const invalidateAttributes = useInvalidateAttributes()
  const { showNotification } = useNotification()

  const handleSuccessBrandDelete = (data: AttributeDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное удаление',
      message: `message`,
    })
    invalidateAttributes()
  }

  const handleConfirmDelete = (data: DeleteState<number, AttributeDto>) => {
    deleteAttributeMutation(data.key, {
      onSuccess: handleSuccessBrandDelete,
    })
  }

  return (
    <>
      <PaginatedDataView
        data={data}
        columns={attributesDataTableColumns}
        meta={{ totalPages }}
        onChange={onChange}
      />

      <ConfirmDeleteDialog onConfirmDelete={handleConfirmDelete} />
    </>
  )
}
