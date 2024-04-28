import React from 'react'
import {Formwrapper} from "@/components/ui/form-wrapper"
import { EmployeeForm } from '@/components/ui/employee-form'

const EmployeeCreatePage = () => {
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
  <Formwrapper title='Create a new Employee '>
    <EmployeeForm/>
  </Formwrapper>
  </div>
  )
}

export default EmployeeCreatePage