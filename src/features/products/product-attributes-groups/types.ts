export interface ProductAttribute {
  attributeId?: number
  value: string
}

export interface ProductAttributesGroup {
  name: string
  attributes: ProductAttribute[]
}
