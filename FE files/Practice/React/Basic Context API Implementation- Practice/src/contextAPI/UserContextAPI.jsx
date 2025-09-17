import { createContext, useState } from 'react'

export const UserContextAPI=createContext();


export const UserContextAPIProvider = ({children}) => {
    const name='Nitesh';
    const [theme,setTheme]=useState('light')
  return (
   <UserContextAPI.Provider value={{name, theme, setTheme}}>
    {children}
   </UserContextAPI.Provider>
  )
}
