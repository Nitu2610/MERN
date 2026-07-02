import axios from "axios";

export const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        params,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };


// 1. Line ({ baseUrl } = { baseUrl: "" }) => 
//   Receives 
//       axiosBaseQuery({
//         baseUrl: "https://jsonplaceholder.typicode.com",
//       });
//       ---
//     Mistake: axiosBaseQuery("https://jsonplaceholder.typicode.com")
  
// 2. Line async ({ url, method, data, params }) => {
//         Recives whatever query() returns.
//           Endpoint  
//             query: () => ({
//                             url: "/users",
//                             method: "GET",
//                           })
//         ---
//         Mistake : query: () => "/users" Because your axiosBaseQuery expects an object.

// 3. Line  url: baseUrl + url
//         baseUrl = "https://jsonplaceholder.typicode.com"
//         url = "/users"
//         Result => baseUrl = "https://jsonplaceholder.typicode.com"
// url = "/users"
//         Mistake : url: baseUrl

// 4. Line return { data: result.data };
//         RTK Query expects: 
//                           { data: something }
//         Mistake :  return result.data;   

// 5. Line  catch (axiosError) {
//                               return {
//                                 error: {
//                                   status,
//                                   data
//                                 }
//                               }
//                             }
//        RTK Query expects: {
//                             error: something
//                           }
//         Mistake : throw axiosError;  or return axiosError;


//   Mental Model
// query()
//    ↓
// { url, method, data, params }
//    ↓
// axiosBaseQuery
//    ↓
// axios(...)
//    ↓
// { data } OR { error }
//    ↓
// RTK Query
//    ↓
// Component