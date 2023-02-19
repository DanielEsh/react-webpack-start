import Counter from 'components/Counter'
import { ChangeLangButton } from 'components/ChangeLangButton'
import { Table } from 'shared/ui/Table'

export const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <Table />
      <Counter />
      <ChangeLangButton />
    </div>
  )
}
