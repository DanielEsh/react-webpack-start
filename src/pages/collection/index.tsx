import { Route } from 'react-router-dom'

import CollectionsList from './CollectionsList'
import CollectionDetails from './CollectionDetails'
import CollectionCreate from './CollectionCreate'

export default [
  <Route
    path="collections"
    element={<CollectionsList />}
  >
    <Route
      path="create"
      element={<CollectionCreate />}
    />
    <Route
      path=":id"
      element={<CollectionDetails />}
    />
  </Route>,
]
