import { Button } from '@chakra-ui/react';
import React from 'react'
import { Navigate, useNavigate } from 'react-router';

export const Login = ({ isLoggedIn,setIsLoggedIn}) => {
  const navigate=useNavigate();
  const handleLog=(e)=>{
    e.preventDefault();
    setIsLoggedIn(prev=> !prev)
    console.log(isLoggedIn);
    navigate('/dashboard')
  }
  return (
     <>
     <h1>Login Page</h1>
     <h2>The user is {isLoggedIn ? "Logged In" : "Logged Out"}</h2>
      <Button onClick={handleLog}>`Click me to change the status `</Button>
      <Button onClick={()=> navigate('/dashboard')}>Click to go Dashboard</Button>
     </>
  )
}
