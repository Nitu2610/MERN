import React from 'react'
import { Login } from '../Pages/Login'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = ({isLoggedIn, children}) => {
  return (<>
  
   { isLoggedIn ? children :  <Navigate to={'/login'}/> }
   </>
  )
}
