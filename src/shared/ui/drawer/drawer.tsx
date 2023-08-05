import { UiKitDrawer, DrawerProps } from 'shared/ui-kit/drawer'

const COMPONENT_NAME = 'UiKitDrawer'

export const Drawer = (props: DrawerProps) => {
  const { children, ...restProps } = props

  return <UiKitDrawer {...restProps}>{children}</UiKitDrawer>
}

UiKitDrawer.displayName = COMPONENT_NAME
