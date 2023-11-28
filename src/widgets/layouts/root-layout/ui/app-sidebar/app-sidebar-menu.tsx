import { ReactNode } from 'react'
import { AppRouterPaths } from 'pages/types'
import { NavLink } from 'react-router-dom'
import { classNames } from 'shared/utils'
import IconCategories from 'shared/assets/icons/categories.svg'
import IconDiamond from 'shared/assets/icons/diamond.svg'
import IconPackagePlus from 'shared/assets/icons/package-plus.svg'
import IconShoppingBag from 'shared/assets/icons/shopping-bag.svg'
import IconWarehouse from 'shared/assets/icons/warehouse.svg'
import IconShoppingCart from 'shared/assets/icons/shopping-cart.svg'
import IconUser from 'shared/assets/icons/user.svg'

interface MenuSidebarItem {
  label: string
  link: string
  icon?: ReactNode
}

export const AppSidebarMenu = () => {
  const menu: MenuSidebarItem[] = [
    {
      icon: <IconCategories />,
      label: 'Категории',
      link: AppRouterPaths.categories,
    },
    {
      icon: <IconDiamond />,
      label: 'Бренды',
      link: AppRouterPaths.brands,
    },
    {
      icon: <IconPackagePlus />,
      label: 'Атрибуты',
      link: AppRouterPaths.attributes,
    },
    {
      icon: <IconShoppingCart />,
      label: 'Продукция',
      link: AppRouterPaths.products,
    },
    {
      icon: <IconWarehouse />,
      label: 'Склад',
      link: AppRouterPaths.warehouses,
    },
    {
      icon: <IconShoppingBag />,
      label: 'Заказы',
      link: AppRouterPaths.orders,
    },
    {
      icon: <IconUser />,
      label: 'Сотрудники',
      link: AppRouterPaths.staff,
    },
  ]

  const classes = (isActive: boolean) => {
    return classNames(
      'flex gap-4 h-14 w-full items-center rounded-md p-2.5 text-white',
      {
        'bg-neutral-900 ': isActive,
      },
    )
  }

  return (
    <ul className="flex w-full flex-col rounded-md bg-neutral-800 p-2.5">
      {menu.map((menuItem, index) => (
        <li key={index}>
          <NavLink
            className={({ isActive }) => classes(isActive)}
            to={menuItem.link}
          >
            {menuItem.icon && (
              <span className="h-7 w-7 text-white">{menuItem.icon}</span>
            )}
            {menuItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
