import axios from "axios";
import React, { useEffect, useState } from "react";
import { DisplayUser } from "./DisplayUser";
import { Loading } from "./Loading";
import { Error } from "./Error";

export const UserList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
        );
        setUsers(res.data);
      } catch (error) {
        setError(error.message);
        // console.log(error.message)
      } finally {
        setLoading(false);
      }
    }, 3000);
    return () => clearTimeout(timerId);
  }, []);
  
  if (loading) return <Loading loading={loading} />;
  if (error) return <Error errorMessage={error} />;
  return <>{users.length > 0 && <DisplayUser users={users} />}</>;
};
