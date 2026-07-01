import { Route, Routes } from "react-router-dom"
import { UserList } from "../components/UserList"
import { UserDetails } from "../components/UserDetails"


export const AppRoutes = () => {
return (
<>
<Routes>
  <Route path="/" element={<UserList/>} />
  <Route path="user/:id" element={<UserDetails/>} />
</Routes>

</>)
}
