import React from 'react'

export const Error = ({errorMessage}) => {
  return (
  <>
   <h1>Error :Unable to fetch the users.</h1>
   {errorMessage}
  </>
  )
}
