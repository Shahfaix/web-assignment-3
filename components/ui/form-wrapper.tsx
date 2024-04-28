import React, { ReactNode } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  interface FormwrapperProps
{
  children:React.ReactNode;
  title: string;
  description?: string;
}
  
export const Formwrapper = ({children,title,description}:FormwrapperProps) => {
  return (
    <Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    {children}
  </CardContent>

</Card>

  )
}


