import { forwardRef, PropsWithChildren } from 'react'

type TemplateProps = PropsWithChildren

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
