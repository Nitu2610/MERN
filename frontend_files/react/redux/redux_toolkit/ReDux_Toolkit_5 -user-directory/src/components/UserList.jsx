import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/fetchUser";
import { useNavigate } from "react-router-dom";

export const UserList = () => {
  const navigate=useNavigate();
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (loading) return <h1>Loading....</h1>;
  if (error) {
    const { message, code } = error;
    return (
      <h1>
        {message} deu to error code: {code}
      </h1>
    );
  }
  return (
    <>
      <div>UserList</div>
     {user.length >0 &&  <ul>
        {user.map(({ id, name, email, phone }) => {
          return (
            <li key={id}>
              <div>
                <h3>{id}</h3>
                <p onClick={()=> {
                  navigate(`/user/${id}`)}}>{name}</p>
                <p>{email}</p>
                <p>{phone}</p>
              </div>
            </li>
          );
        })}
      </ul>}
    </>
  );
};
