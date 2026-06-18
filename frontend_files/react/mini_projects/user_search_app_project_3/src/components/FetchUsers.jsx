import React, { useEffect, useState } from 'react'
import { Loading } from './Loading';
import { useFetchUsers } from '../useFetchUsers';

export const FetchUsers = ({setDataCheck, dataCheck, sendUserData}) => {
   
  
  useFetchUsers(setDataCheck , sendUserData);
  
  return (
    <>
    <div>FetchUsers</div>
    {!dataCheck ? <Loading/> : <h3>User Details are Fetched!!!!!</h3>}
    </>
  )
}
