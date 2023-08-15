import { CategoriesDataTable } from 'entities/categories/ui/data-table/categories-data-table'

const CategoriesPage = () => {
  return (
    <div>
      <div>
        <pre>
          <code>Breadcrumbs</code>
        </pre>

        <CategoriesDataTable data={[]} />
      </div>
    </div>
  )
}

export default CategoriesPage
