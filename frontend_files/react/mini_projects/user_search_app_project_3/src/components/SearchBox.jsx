import React, { useRef, useState } from 'react'

export const SearchBox = ({dataStatus,name,setName}) => {
  const userRef=useRef();

  const handleSearch=(e)=> {
    e.preventDefault();
    setName(e.target.value);
   // console.log(name)
  }
  if(dataStatus) userRef.current.focus();
  return (
   <>
   <input type="text" placeholder='Enter name to search... ' value={name} onChange={handleSearch} ref={userRef}/>
   </>
  )
}
