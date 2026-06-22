import { Button } from '@chakra-ui/react'
import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import '../App.css'
import { Attendance } from './Attendance';

export const StudentDashboard = () => {
const navigate=useNavigate();

  return (
   <>
    <div>Student Dashboard</div>
    <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <Button onClick={()=> navigate('profile')}> Go To Profile</Button>
    <Button onClick={()=> navigate('results')} > Go To Results</Button>
    <Button onClick={()=> navigate('attendance')} > Go To Attendance</Button>
    </ul>
     <Outlet/>
   </>
  )
}
