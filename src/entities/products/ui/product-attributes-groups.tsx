import { Button, Table } from 'shared/ui-kit'

export const ProductsAttributesGroups = () => {
  return (
    <div className="mt-4 px-6">
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.ColumnHeader>Название</Table.ColumnHeader>
            <Table.ColumnHeader>Количество</Table.ColumnHeader>
          </Table.Row>
        </Table.Head>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Группа атрибутов 1</Table.Cell>
            <Table.Cell>20</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell>Группа атрибутов 2</Table.Cell>
            <Table.Cell>30</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <Button variant="ghost">Добавить группу атрибутов</Button>
    </div>
  )
}
