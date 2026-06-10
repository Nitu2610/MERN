import React, { createContext, useState } from 'react'

export const AuthContext=createContext();

export const AuthContextProvider = ({children}) => {
    const [userStatus, setUserStatus]=useState(false)
  return (
   <AuthContext.Provider value={{userStatus, setUserStatus}}>
    {children}
   </AuthContext.Provider>
  )
}
