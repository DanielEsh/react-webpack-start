import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="flex h-[64px] justify-between gap-3 bg-neutral-800 p-4 text-white">
      <div className="flex gap-3">
        <div className="flex items-center justify-center rounded bg-neutral-300 p-5 text-black">
          Breadcrumbs
        </div>

        <div className="flex gap-3">
          <Link to={'/'}>Главная</Link>
          <Link to={'/about'}>О сайте</Link>
          <Link to={'/collections'}>Collections</Link>
          <Link to={'/collections/1'}>Collections 1</Link>
        </div>
      </div>

      <div className="flex gap-3">
        <div className="flex items-center justify-center rounded bg-neutral-300 p-5 text-black">
          USER INFO
        </div>
      </div>
    </div>
  )
}
