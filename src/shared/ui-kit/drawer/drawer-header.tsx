import { UiDefaultProps } from 'shared/ui-kit/types'
import { classNames } from 'shared/utils'
import { CloseButton } from 'shared/ui-kit/Modal/CloseButton'

export const DrawerHeader = ({ className, children }: UiDefaultProps) => {
  return (
    <>
      <header className={classNames('relative px-4 pt-4', className)}>
        {children}
        <CloseButton onClick={() => console.log('close')} />
      </header>
      <div
        role="none"
        className="my-6 h-[1px] w-full shrink-0 bg-border"
      />
    </>
  )
}
