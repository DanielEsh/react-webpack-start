import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { Popover } from 'shared/ui-kit/Popover'
import { classNames } from 'shared/utils'

type SelectOptionsProps = UiDefaultProps

const COMPONENT_NAME = 'SelectOptions'

export const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  (props, forwardedRef) => {
    const { className, children } = props

    const classes = classNames(
      'flex w-full min-w-[238px] flex-col rounded-md bg-blue-500 p-2',
      className,
    )

    return (
      <Popover.Floating>
        <ul className={classes}>{children}</ul>
      </Popover.Floating>
    )
  },
)

SelectOptions.displayName = COMPONENT_NAME
