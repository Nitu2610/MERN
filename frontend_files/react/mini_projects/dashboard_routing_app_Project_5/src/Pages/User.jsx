import React from 'react'
import { useParams } from 'react-router'

export const User = () => {
  const {username}=useParams()
  return (
   <h1>Welcome {username}</h1>
  )
}
