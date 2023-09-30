import { Link } from '../link'

export const Breadcrumbs = () => {
  return (
    <nav
      className="flex"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center space-x-1">
        <li className="inline-flex items-center">
          <a
            href="#"
            className="ml-1 text-sm text-gray-500 hover:text-blue-600"
          >
            Home
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <svg
              className="mx-1 h-3 w-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ml-1 text-sm text-gray-500 hover:text-blue-600"
            >
              Projects
            </a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <svg
              className="mx-1 h-3 w-3 text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <a
              href="#"
              className="ml-1 text-sm hover:text-blue-600"
            >
              Last
            </a>
          </div>
        </li>
      </ol>
    </nav>
  )
}
