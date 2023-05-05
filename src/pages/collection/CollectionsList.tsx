import { useState } from 'react'
import { useGetCollections } from 'entities/Collection/api'

import { Outlet, useSearchParams } from 'react-router-dom'
import { CollectionsTable } from 'entities/Collection'

type RowsPerPage = 5 | 10 | 25

import { Data } from 'entities/Collection/types'
import qs from 'qs'

export function objectToQuery(object: any) {

  const DELIMITER = '&'

  let paramString = ''

  for (const name in object) {
    if (!Array.isArray(object[name])) {
      paramString += `${name}=${object[name]}&`
    } else {
      paramString += `${name}=`
      object[name].forEach((val: any) => {
        if (val.toString() === 'true') {
          paramString += '1,'
        } else if (val.toString() === 'false') {
          paramString += '0,'
        } else {
          paramString += `${val},`
        }
      })

      paramString = paramString.slice(0, -1)
      paramString += DELIMITER
    }
  }
  paramString = paramString.slice(0, -1)
  return paramString
}

const test = () => {
  const obj = {
    slug: 'asc',
    name: 'desc',
    limit: 5,
    page: 2,
  }

  console.log('test', objectToQuery(obj))
}

const CollectionsPage = () => {
  test()
  const { isLoading, isError, data } = useGetCollections()

  const [rowsPerPage, setRowsPerPage] = useState<RowsPerPage>(5)

  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = searchParams.get('page') ?? '1'
  // const limit = searchParams.get('limit') ?? '5'

  const handleRowPerPageChange = (event: any) => {
    setRowsPerPage(event.target.value)
    setSearchParams({ limit: event.target.value })
  }

  const handlePageClick = (page: number) => {
    const strPage = String(page)
    setSearchParams({ page: strPage })
  }

  const handleSortChange = async (sort: any) => {
    console.log('SORT', sort)
    // const data = await getTestData(sort)
    // setTestData(data)
  }

  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        {isError && <div>Error loading</div>}
        {data && (
          <CollectionsTable
            currentPage={Number(currentPage)}
            items={data.data}
            meta={data.meta}
            rowPerPage={rowsPerPage}
            onPageChange={handlePageClick}
            onSortChange={handleSortChange}
            onRowsPerPageChange={handleRowPerPageChange}
          />
        )}
      </div>

      <Outlet />
    </div>
  )
}

export default CollectionsPage
