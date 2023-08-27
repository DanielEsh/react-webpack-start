export enum AttributeType {
  Number = 'number',
  String = 'string',
  List = 'list',
}

export interface Attribute {
  id: number
  name: string
  value: string
  type: AttributeType
}
