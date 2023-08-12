import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const DialogActions = ({ className, children }: UiDefaultProps) => {
  return (
    <div
      className={classNames(
        'mt-auto flex justify-end gap-3 bg-gray-100 py-3 px-6',
        className,
      )}
    >
      {children}
    </div>
  )
}
