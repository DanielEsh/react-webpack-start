import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'

export const DrawerFooter = ({ className, children }: UiDefaultProps) => {
  return (
    <footer className={classNames('mt-auto', className)}>
      <div
        role="none"
        className="mb-6 h-[1px] w-full shrink-0 bg-border"
      />
      {children}
    </footer>
  )
}
