import React from 'react'

export const UserCard = ({name,email,city,phone,companyName,}) => {
  return (
    <div style={Container}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{city}</p>
      <p>{phone}</p>
      <p>{companyName}</p>
    </div>
  )
}


const Container={border:'1px solid red', width:'300px', textAlign:'center', borderRadius:'10px',}