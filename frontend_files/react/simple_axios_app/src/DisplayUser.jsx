import React from 'react'

export const DisplayUser = ({users}) => {

  return (
    <>
    
    {users.length>0 ? (
      <>
      <h1>List of Usernames:</h1>
      <ul>
      {users.map(({username,id})=> (<li key={id}>{username}</li>))}
      </ul>
      </>
    ) :(
      " "
    ) }
    </>
  )
}
