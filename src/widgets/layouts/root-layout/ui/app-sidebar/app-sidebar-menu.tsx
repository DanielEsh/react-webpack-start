import { AppRouterPaths } from 'pages/types'
import { NavLink } from 'react-router-dom'
import { classNames } from 'shared/utils'

interface MenuSidebarItem {
  label: string
  link: string
}

export const AppSidebarMenu = () => {
  const menu: MenuSidebarItem[] = [
    {
      label: 'Categories',
      link: AppRouterPaths.categories,
    },
    {
      label: 'Brands',
      link: AppRouterPaths.brands,
    },
    {
      label: 'Attributes',
      link: AppRouterPaths.attributes,
    },
    {
      label: 'Products',
      link: AppRouterPaths.products,
    },
    {
      label: 'Warehouses',
      link: AppRouterPaths.warehouses,
    },
  ]

  const classes = (isActive: boolean) => {
    return classNames(
      'flex h-14 w-full items-center rounded-md p-2.5 text-white',
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
            {menuItem.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}
