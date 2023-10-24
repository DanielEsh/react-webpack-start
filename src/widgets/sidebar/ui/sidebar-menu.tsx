import { AppRouterPaths } from 'pages/types'
import { Link } from 'react-router-dom'

export const SideBarMenu = () => {
  return (
    <ul className="flex flex-col">
      <li>
        <Link to={AppRouterPaths.categories}>categories</Link>
      </li>

      <li>
        <Link to={AppRouterPaths.brands}>brands</Link>
      </li>

      <li>
        <Link to={AppRouterPaths.attributes}>attributes</Link>
      </li>

      <li>
        <Link to={AppRouterPaths.products}>products</Link>
      </li>

      <li>
        <Link to={AppRouterPaths.warehouses}>warehouses</Link>
      </li>
    </ul>
  )
}
