import { Button } from '@chakra-ui/react'
import React from 'react'
import { Outlet, useNavigate } from 'react-router'

export const Dashboard = () => {
  const navigate=useNavigate();
  return (
    <>
    <h1>Dashboard</h1>
    <Button onClick={()=> navigate('profile')}>Move to Profile</Button>
     <Button onClick={()=> navigate('settings')}>Move to Settings</Button>
    <Outlet/>
    </>
  )
}
