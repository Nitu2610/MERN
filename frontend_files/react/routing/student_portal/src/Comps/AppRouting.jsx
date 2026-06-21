import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './Layout'
import { Home } from '../Pages/Home'
import { Courses } from '../Pages/Courses'
import { Login } from '../Pages/Login'
import { StudentDashboard } from '../Pages/StudentDashboard'

export const AppRouting = () => {
  return (
    <Routes>
      <Route element={ <Layout/>}>
            <Route path='/' element={<Home/>} />
            <Route path='/courses' element={<Courses/>} />
      </Route>

      <Route path='/login' element={<Login/>} />
       <Route path='/student-dashboard' element={<StudentDashboard/>} />

    </Routes>
  )
}
