import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkFetchUser } from "../RTK/simple/thunkFetchUser";

export const SimpleRTK = () => {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {
    dispatch(thunkFetchUser());
  }, []);

  return (
    <>
      <div>SimpleRTK</div>;{loading && <h1>Loading....</h1>}
      {error && <h1>Unable to fetch the data</h1>}
      {user && (
        <div
          style={{
            marginTop: "20px",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "10px",
            backgroundColor: "navy",
            color: "white",
            margin: " 50px ",
            height: "130px",
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
    </>
  );
};
