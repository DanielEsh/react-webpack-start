import {
  useDeleteBrandMutation,
  useInvalidateBrands,
} from 'entities/brands/api/queries'
import { useNotification } from 'shared/notification'
import { BrandDto } from 'entities/brands/api/types'
import type { DeleteState } from 'shared/ui/dialog/confirm-delete'

export function useBrandDelete() {
  const { mutate: deleteCategoryMutation } = useDeleteBrandMutation()
  const { invalidateBrands } = useInvalidateBrands()
  const { showNotification } = useNotification()

  const handleSuccessBrandDelete = (data: BrandDto) => {
    showNotification({
      id: data.id,
      title: 'Успешное удаление',
      message: `message`,
    })
    invalidateBrands()
  }

  const handleConfirmDelete = (data: DeleteState<number, BrandDto>) => {
    deleteCategoryMutation(data.key, {
      onSuccess: handleSuccessBrandDelete,
    })
  }

  return {
    handleConfirmDelete,
  }
}
