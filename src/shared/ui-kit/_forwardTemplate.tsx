import { forwardRef } from 'react'
import { UiDefaultProps } from 'shared/ui-kit/types'

// interface TemplateProps extends UiDefaultProps {
//   props: string
// }

type TemplateProps = UiDefaultProps

const COMPONENT_NAME = 'Template'

export const Template = forwardRef<HTMLDivElement, TemplateProps>(
  (props, forwardedRef) => {
    return (
      <div>
        <span>Template</span>
      </div>
    )
  },
)

Template.displayName = COMPONENT_NAME
