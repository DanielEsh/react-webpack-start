import { useNavigate } from 'react-router-dom'

import { Drawer } from 'shared/ui-kit/drawer'

const CategoryDetailsPage = () => {
  const navigate = useNavigate()

  const close = () => {
    navigate('/categories')
  }

  return (
    <Drawer
      opened
      onClose={close}
    >
      updated
    </Drawer>
  )
}

export default CategoryDetailsPage
