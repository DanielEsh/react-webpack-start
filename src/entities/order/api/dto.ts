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

interface UserDetailsDto {
  name: string
  email: string
  phone: number
  comment: string
}

interface DeliveryDetailsDto {
  country: string
  city: string
  street: string
  house: string
  building: string
  apartment_office: string
  zip_code: string
}

export interface OrderDetailsDto {
  id: number
  number: string
  payment_status: any
  status: any
  warehouse: any
  staff: any
  user_details: UserDetailsDto
  delivery_details: DeliveryDetailsDto
}

export type CreateOrderDto = Pick<OrderDetailsDto, 'id' | 'number' | 'status'>
