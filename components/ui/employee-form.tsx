"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {employeeSchema}from "@/schemas"
import { CreateEmployee } from "@/actions/createEmployee"

 
 

export const EmployeeForm = () => {
    const form = useForm<z.infer<typeof employeeSchema>>({
        resolver: zodResolver(employeeSchema),
        defaultValues: {
          firstName:"",
          lastName: "",
          email:"",
          PhoneNumber:"",
        },
      })
   
      function onSubmit(values: z.infer<typeof employeeSchema>) {
      
        console.log(values);
        CreateEmployee(values);
      }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="enter your first name" {...field} />
            </FormControl>
         
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Last Name</FormLabel>
            <FormControl>
              <Input placeholder="enter your last name" {...field} />
            </FormControl>
       
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email</FormLabel>
            <FormControl>
              <Input placeholder="enter your email" {...field} />
            </FormControl>
           
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name= "PhoneNumber"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input placeholder="enter your phone number" {...field} />
            </FormControl>
          
            <FormMessage />
          </FormItem>
        )}
      />


      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

