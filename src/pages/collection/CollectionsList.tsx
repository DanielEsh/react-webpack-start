import { useGetCollections } from 'entities/collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import {
  CollectionsDataTable,
  CollectionsDataTableHeader,
  CollectionsDataTableFooter,
} from 'entities/collection/ui'
import {
  $collectionTableStore,
  setCollectionTableValues,
} from 'entities/collection/model'
import { useStore } from 'effector-react'
import qs from 'qs'
import { useEffect } from 'react'

const CollectionsPage = () => {
  const values = useStore($collectionTableStore)
  const [searchParams, setSearchParams] = useSearchParams()

  const { isLoading, isError, data } = useGetCollections({
    page: values.currentPage ?? 1,
    limit: values.limit ?? 5,
    sort_by: [values.sortBy ?? 'id'],
    order_by: [values.orderBy ?? 'asc'],
  })

  useEffect(() => {
    if (searchParams.get('currentPage')) {
      setCollectionTableValues({
        currentPage: Number(searchParams.get('currentPage')),
        limit: Number(searchParams.get('limit')) as any,
        sortBy: String(searchParams.get('sortBy')),
        orderBy: String(searchParams.get('orderBy')),
      })
    }
  }, [])

  const handleChange = () => {
    const string = qs.stringify($collectionTableStore.getState())
    setSearchParams(string)
  }

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
            <CollectionsDataTable
              data={data.data}
              onChange={handleChange}
            />
            <CollectionsDataTableFooter
              totalPages={data.meta.pagination.totalPages}
              onChange={handleChange}
            />
          </>
        )}
      </div>

      <Outlet />
    </div>
  )
}

export default CollectionsPage
