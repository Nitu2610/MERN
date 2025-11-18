import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Wildcard = () => {
    const navigate=useNavigate();
{/** if the use doesn't move to home page, after 5secs it will automaticcaly move to home page*/}
    setTimeout(() => {
        navigate('/')
    }, 10000);

  return (
    <div>
        <h1>Incorrect website link, kindly go back to home page</h1>
        {/** By clicking the button the user will be moved to home page with the help of useNavigate. */}
        <button onClick={()=> navigate('/')}>Back to Home Page</button>
    </div>
  )
}
