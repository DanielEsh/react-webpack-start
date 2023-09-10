import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'
import { Popover } from 'shared/ui-kit/Popover'
import { classNames } from 'shared/utils'

interface SelectOptionsProps extends UiDefaultProps {
  withinPortal?: boolean
}

const COMPONENT_NAME = 'SelectOptions'

export const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  (props, forwardedRef) => {
    const { className, children, withinPortal = true } = props

    const classes = classNames(
      'relative flex flex-col justify-start w-[color:var(--popover-anchor-width)] overflow-hidden rounded-md border bg-white shadow-md p-2',
      className,
    )

    return (
      <Popover.Floating
        withinPortal={withinPortal}
        hideWhenLeave={false}
      >
        <ul className={classes}>{children}</ul>
      </Popover.Floating>
    )
  },
)

SelectOptions.displayName = COMPONENT_NAME
