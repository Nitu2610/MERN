import React, { useContext } from 'react'
import { AuthContext } from '../contextAPI/AuthContext'

export const Footer = () => {
    const {userStatus} = useContext(AuthContext)
  return (
  <div style={{padding:'10px',margin:"auto",  border:'2px solid lightBlue', backgroundColor:'beige', fontWeight:'bold', borderRadius:"25px", width:'45%', marginTop:'50px'}}><p> {userStatus ? " Welcome, User" : " Please Log in" }</p></div>
  )
}
