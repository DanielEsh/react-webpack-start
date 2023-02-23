import Counter from 'components/Counter'
import { ChangeLangButton } from 'components/ChangeLangButton'
import { DataTable } from 'components/DataTable'

export const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <DataTable />
      <Counter />
      <ChangeLangButton />
    </div>
  )
}
