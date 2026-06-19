import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from './Navbar'

export const Layout = () => {
  return (
   <>
   <h1>Header</h1>
   <Outlet/>
   <h2>Footer</h2>
   </>
  )
}
