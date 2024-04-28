import { z } from "zod"
export const employeeSchema = z.object({
    
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
      }),
      email: z.string().email(),

      PhoneNumber:z.string().min(11, {
        message: "Phone number must be at 11 characters.",
      }),


  })