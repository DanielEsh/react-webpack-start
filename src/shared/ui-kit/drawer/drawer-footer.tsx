import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { Divider } from 'shared/ui-kit/divider'

export const DrawerFooter = ({ className, children }: UiDefaultProps) => {
  return (
    <footer className={classNames('mt-auto', className)}>
      <Divider className="my-6 " />
      {children}
    </footer>
  )
}
