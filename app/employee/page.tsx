import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"



const EmployeePage = () => {
  return (
    <div className='flex flex-col gap-4 mt-4 max-w[1000px] justify-center items-center'>
        <h1 className='text-4xl font-bold'>CRUD Operation using Nextjs 14 ,Prisma and PostgreSQL </h1>
        <Button asChild>
  <Link href="/employee/create">create</Link>
  
</Button>

    </div>
  )
}

export default EmployeePage