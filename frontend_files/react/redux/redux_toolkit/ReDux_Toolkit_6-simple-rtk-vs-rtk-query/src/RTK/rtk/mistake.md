| ❌ What you did                                                             | ✅ What it should be                                        | Why                                                                             |
| -------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `import { createApi } from "@reduxjs/toolkit/query"`                       | `import { createApi } from "@reduxjs/toolkit/query/react"` | The `/react` version generates hooks like `useGetUserQuery`.                    |
| Used `axiosBaseQuery()` before creating/importing it                       | Create `axiosBaseQuery.js` and import it                   | RTK Query doesn't provide Axios support out of the box.                         |
| Initially used `query: () => "/users"` with Axios                          | `query: () => ({ url: "/users", method: "GET" })`          | Your custom `axiosBaseQuery` expects an object containing `url`, `method`, etc. |
| Store had only `api.reducer`                                               | Add `api.middleware` too                                   | RTK Query needs middleware for caching, refetching, polling, and subscriptions. |
| `reducer: { [api.reducerPath]: api.reducer }` only                         | `reducer` + `middleware`                                   | Both are required for RTK Query to work properly.                               |
| Used two separate Redux stores                                             | Prefer a single store with multiple reducers               | Most real-world apps use one store and combine reducers.                        |
| Nested `<Provider>` components                                             | One top-level `<Provider store={store}>`                   | Multiple stores make state management harder to reason about.                   |
| Tried to render an entire object in JSX: `{user}` or `{data[0]}`           | Render a property: `{user.name}` or map the array          | React cannot render plain JavaScript objects directly.                          |
| API returned `/users` (an array), but tried to display the object directly | `data?.map(user => <p>{user.name}</p>)`                    | `/users` returns an array of user objects.                                      |
| Used `build` in one place and `builder` in another                         | Pick one name and stay consistent                          | Both work, but consistency improves readability.                                |



## ✅ Use Axios with RTK Query when

Your project already uses Axios and depends on its features, such as:

- Request interceptors
- Response interceptors
- Automatic token refresh
- Custom error handling
- Request cancellation with Axios APIs
- Upload progress tracking
- An existing Axios service layer that you don't want to rewrite