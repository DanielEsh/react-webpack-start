import { useGetCollections } from 'entities/collection/api'

import { Outlet } from 'react-router-dom'
import {
  CollectionDataTable,
  CollectionsDataTableHeader,
  CollectionDataTableFooter,
} from 'entities/collection/ui'
import { $collectionTableStore } from 'entities/collection/model'

import { useStore } from 'effector-react'

const CollectionsPage = () => {
  const values = useStore($collectionTableStore)

  const { isLoading, isError, data } = useGetCollections({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 5,
    sort_by: [values.sortBy ?? 'id'],
    order_by: [values.orderBy ?? 'asc'],
  })

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isError && <div>Error loading</div>}
        {isLoading && <div>Loading...</div>}
        {data && (
          <>
            <CollectionsDataTableHeader />
            <CollectionDataTable data={data.data} />
            <CollectionDataTableFooter />
          </>
        )}
      </div>

      <Outlet />
    </div>
  )
}

export default CollectionsPage
