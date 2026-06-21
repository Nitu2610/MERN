import axios from "axios";
import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { ErrorComp } from "./ErrorComp";
import { DisplayComments } from "./DisplayComments";
import { DisplayInfiniteScolling } from "./DisplayInfiniteScolling";

export const FetchComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const timerId = setTimeout(async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/comments",
        );
        setComments(res.data);
        // console.log(res.data);
      } catch (error) {
        setFetchError(error.message);
        //  console.log(error.message)
      } finally {
        setLoading(false);
      }
    }, 3000);

    return () => clearTimeout(timerId);
  }, []);

  if (loading) return <Loading />;
  if (fetchError) return <ErrorComp fetchError={fetchError}/>;

  return (
    <>
     <DisplayComments arr={comments} />
    <DisplayInfiniteScolling arr={comments} />
    </>
  ) 
};
