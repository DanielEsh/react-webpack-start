export enum OrderPaymentStatus {
  cash = 'cash',
}

export interface OrderDto {
  id: number
  number: number
  payment_status: OrderPaymentStatus
  status: 'new'
  name: string
  email: string
  phone: string
  comment: string
  total_price: string
}
