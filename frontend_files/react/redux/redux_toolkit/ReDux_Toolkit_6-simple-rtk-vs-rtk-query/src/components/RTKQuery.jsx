import React from "react";
import { useGetUserQuery } from "../RTK/rtk/rtkSlice";

export const RTKQuery = () => {
  const { data, error, isLoading } = useGetUserQuery();
  console.log("rtk Data", data);

  return (
    <>
      {isLoading && <h1>Loading....</h1>}
      {error && <h2>Error in RTK Query Fetch</h2>}
      <h2>RTK Query</h2>
      {data && (
        <ul>
          {data.map(({ id, username, email, phone }) => (
            <li key={id}>
              <h3>{username}</h3>
              <p>{email}</p>
              <p>{phone}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
