import React from 'react'
import { Navigate, Outlet } from 'react-router'

export const ProtectedRoute = ({isLoggedIn}) => {
  if(!isLoggedIn) {
    return <Navigate to="/login" />
  }
  return <Outlet/>
}
