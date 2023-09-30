import { Breadcrumbs } from 'shared/ui-kit/breadcrumbs/breadcrumbs'

export default function SandBoxPage() {
  return (
    <div>
      <Breadcrumbs>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Project</Breadcrumbs.Item>
        <Breadcrumbs.Item isLast>Current</Breadcrumbs.Item>
      </Breadcrumbs>
    </div>
  )
}
