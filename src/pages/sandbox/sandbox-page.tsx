import { Breadcrumbs } from 'shared/ui-kit/breadcrumbs/breadcrumbs'

export default function SandBoxPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item to="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>SandBox</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}
