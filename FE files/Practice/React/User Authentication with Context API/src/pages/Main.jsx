import React, { useContext } from 'react'
import { AuthContext } from '../contextAPI/AuthContext'
import { h1 } from 'framer-motion/client'

export const Main = () => {
    const {userStatus} = useContext(AuthContext)
  return (
   <h1>The User is {userStatus ? "Logged In" : 'Logged Out'} !!!</h1>
  )
}
