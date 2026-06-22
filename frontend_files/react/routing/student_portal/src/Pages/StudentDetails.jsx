import React from 'react'
import { useParams } from 'react-router-dom'

export const StudentDetails = () => {
  const studentId=useParams();
  console.log(studentId)
  return (
   <>
   <h1>Student Id: {studentId.id} </h1>
   </>
  )
}
