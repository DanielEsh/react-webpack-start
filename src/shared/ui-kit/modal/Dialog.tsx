import { Modal, type ModalProps } from '../modal'
import { Button } from '../button'

export interface DialogProps
  extends Omit<ModalProps, 'clickOutSideCanClose' | 'children'> {
  onConfirm: () => void
  onCancel?: () => void
}

const COMPONENT_NAME = 'Dialog'

export const Dialog = (props: DialogProps) => {
  const {
    opened,
    onClose = () => null,
    onCancel = () => null,
    onConfirm,
    ...restProps
  } = props

  const handleButtonClick = (type: 'cancel' | 'confirm') => {
    type === 'cancel' ? onCancel() : onConfirm()
    onClose()
  }

  return (
    <Modal
      className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 "
      opened={opened}
      persistent
      onClose={onClose}
      {...restProps}
    >
      <div className="relative flex min-h-[222px] max-w-lg flex-col rounded-md bg-white">
        <div className="p-6 pb-4">
          <div className="flex items-start">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-6 w-6 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                ></path>
              </svg>
            </div>
            <div className="ml-4 mt-0 text-left">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Вы действительно хотите удалить элемент?
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Это действие будет безвозвратное.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-auto flex justify-end gap-3 bg-gray-100 py-3 px-6">
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
          >
            Удалить
          </button>
          <button
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Отменить
          </button>
        </div>
      </div>
    </Modal>
  )
}

Dialog.displayName = COMPONENT_NAME
