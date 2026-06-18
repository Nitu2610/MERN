import React, { useState, useEffect } from "react";

export const useFetchUsers = (setDataCheck, sendUserData) => {
  useEffect(() => {
    const controller = new AbortController();
    const fetchUserDetails = async () => {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        let data = await res.json();
        setDataCheck(true);
        sendUserData(data);
        console.log(data);
      } catch (error) {
        console.log("Unable to fetch the data due to error: ", error);
      }
    };

    const timerId = setTimeout(() => {
      fetchUserDetails();
    }, 3000);
    return () => {
      clearTimeout(timerId);
      controller.abort();
    };
  }, []);
};
