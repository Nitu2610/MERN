import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";

export const api = createApi({
  reducerPath: "rtk_api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetUserQuery } = api;
