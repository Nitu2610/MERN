import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from '../Pages/Home'
import { Courses } from '../Pages/Courses'
import { Login } from '../Pages/Login'
import { StudentDashboard } from '../Pages/StudentDashboard'
import { Profile } from '../Pages/Profile'
import { Results } from '../Pages/Results'
import { Attendance } from '../Pages/Attendance'
import { ProtectedRoute } from './ProtectedRoute'
import { NotFound } from '../Pages/NotFound'
import { StudentDetails } from '../Pages/StudentDetails'

export const AppRouting = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <Routes>
      <Route element={ <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
      </Route>

      <Route path='/login' element={<Login  setIsLoggedIn={setIsLoggedIn} />} />

       <Route path='/student-dashboard' element={
        <ProtectedRoute  isLoggedIn={isLoggedIn} > 
            <StudentDashboard/> 
        </ProtectedRoute>} >
              <Route path='profile' element={<Profile/>} />
               <Route path='results' element={<Results/>} />
                <Route path='attendance' element={<Attendance/>} />
       </Route>

        <Route path='/student/:id' element={<StudentDetails/>} />
         <Route path='*' element={<NotFound/>} />

    </Routes>
  )
}
