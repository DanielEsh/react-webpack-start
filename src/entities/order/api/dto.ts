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

interface UserDetails {
  name: string
  email: string
  phone: number
  comment: string
}

export interface OrderDetailsDto {
  id: number
  number: string
  payment_status: OrderPaymentStatus
  status: any
  user_details: UserDetails
  warehouse: any
  staff: any
}
