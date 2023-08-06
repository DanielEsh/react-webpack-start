import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { Modal } from 'shared/ui-kit/modal'

export const DrawerHeader = ({ className, children }: UiDefaultProps) => {
  return (
    <>
      <Modal.Header className={classNames('relative px-4 pt-4', className)}>
        {children}
      </Modal.Header>
      <div
        role="none"
        className="my-6 h-[1px] w-full shrink-0 bg-border"
      />
    </>
  )
}
