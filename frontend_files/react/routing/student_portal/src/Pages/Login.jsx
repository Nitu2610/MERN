import { Button } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = ({setIsLoggedIn}) => {

  const navigate=useNavigate();
  
  const handleCLick=()=>{
    setIsLoggedIn(prev => !prev)
    navigate('/student-dashboard')
  }
  return (
   <>
   <h1>Login Page</h1>
   <Button onClick={handleCLick}> Move to Student Dashboard</Button>
   </>
  )
}
