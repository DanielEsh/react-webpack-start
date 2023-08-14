import { Link } from 'react-router-dom'

export const SideBarMenu = () => {
  return (
    <ul className="flex flex-col">
      <li>
        <Link to="categories">categories</Link>
      </li>

      <li>
        <Link to="collections">collections</Link>
      </li>
    </ul>
  )
}
