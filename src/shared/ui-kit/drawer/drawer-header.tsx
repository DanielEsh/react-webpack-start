import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { Modal } from 'shared/ui-kit/modal'
import { Divider } from 'shared/ui-kit/divider'

export const DrawerHeader = ({ className, children }: UiDefaultProps) => {
  return (
    <>
      <Modal.Header className={classNames('relative px-4 pt-4', className)}>
        {children}
      </Modal.Header>
      <Divider className="my-6 " />
    </>
  )
}
