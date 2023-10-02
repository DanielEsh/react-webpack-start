export interface ProductAttribute {
  name: string
  value: string
}

export interface ProductAttributesGroup {
  name: string
  attributes: ProductAttribute[]
}
