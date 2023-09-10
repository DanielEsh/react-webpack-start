import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { Divider } from 'shared/ui-kit/divider'

export const DrawerHeader = ({ className, children }: UiDefaultProps) => {
  return (
    <>
      <div className={classNames('relative px-4 pt-4', className)}>
        {children}
      </div>
      <Divider className="my-6 " />
    </>
  )
}
