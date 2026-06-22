import React from 'react'
import { Navbar } from './Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const Layout = ({isLoggedIn, setIsLoggedIn}) => {
  return (
  <>
   <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
   <Outlet/>
   <Footer/>
  </>
  )
}
