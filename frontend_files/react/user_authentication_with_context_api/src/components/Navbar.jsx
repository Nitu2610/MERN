import React, { useContext } from "react";
import { AuthContext } from "../contextAPI/AuthContext";
import { Button } from '@chakra-ui/react'

export const Navbar = () => {
    const {userStatus, setUserStatus}= useContext(AuthContext);


    const handleStatus=()=>{
        setUserStatus(!userStatus)
    }

  return (
    <div style={{width:"50%", border:'2px solid darkBlue', margin:'auto', padding:'15px', borderRadius:'15px', marginTop:'50px', marginBottom:'20px', backgroundColor:'lightskyblue'}}>
      <Button colorScheme="blue" onClick={handleStatus}>{userStatus ? "Log Out" : "Log In"}</Button>
    </div>
  );
};
