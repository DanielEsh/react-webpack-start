import { z } from 'zod'

export const orderFormSchema = z.object({
  payment_status: z.any(),
  status: z.any(),
  warehouse: z.any(),
  staff: z.any(),
  user_details: z.object({
    firstName: z.string(),
    lastName: z.string(),
    middleName: z.string(),
    phone: z.string(),
    email: z.string(),
    comment: z.string(),
  }),
  delivery_details: z.object({
    country: z.string(),
    city: z.string(),
    street: z.string(),
    house: z.string(),
    building: z.string(),
    apartment_office: z.string(),
    zip_code: z.string(),
  }),
})

export type OrderFormSchema = z.infer<typeof orderFormSchema>
