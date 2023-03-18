import Counter from 'components/Counter'
import { ChangeLangButton } from 'components/ChangeLangButton'
import { DataTable } from 'components/DataTable'
import { Ripple } from 'shared/ui/Ripple'
import { Button } from 'shared/ui/Button'

export const MainPage = () => {
  return (
    <div>
      <h1>MainPage</h1>
      <DataTable />
      <Counter />
      <ChangeLangButton />
      <Ripple.Container className="flex h-24 w-24 items-center justify-center rounded-md bg-black text-white">
        children
        <Ripple />
      </Ripple.Container>
      <Button>btn</Button>
    </div>
  )
}
