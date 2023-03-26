import { forwardRef, PropsWithChildren } from 'react'

type TemplateProps = PropsWithChildren

export const Template = forwardRef<HTMLDivElement, TemplateProps>(
  (props, forwardedRef) => {
    return (
      <div>
        <span>Template</span>
      </div>
    )
  },
)
