"use server";

import { db } from "@/lib/db";
import { z } from "zod" 
import {employeeSchema}from "@/schemas"
export const CreateEmployee= async(values:z.infer<typeof employeeSchema>)=>{
console.log(values)
const validatedFields = employeeSchema.safeParse(values)
if(!validatedFields.success){
    return{
        error: "Invalid fields"
    }
}

const employee = await db.employee.create({
    data:{
        firstName:validatedFields.data?.firstName,
        lastName:validatedFields.data?.lastName,
        email:validatedFields.data?.email,
        phoneNumber:validatedFields.data?.PhoneNumber,



    }

})
console.log(employee)

}