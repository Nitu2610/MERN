import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

export const UserDetails = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user.user.find((u) => u.id === +id) );
 
  return (
    <>
      <div>User Details</div>;
      {user && (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.username}</p>
          <p>{user.email}</p>
          <p>
            Address :{" "}
            {` ${user.address.street},${user.address.city},${user.address.zipcode}`}
          </p>
          <p>{user.phone}</p>
        </div>
      )}
    </>
  );
};
