import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "../Pages/Home";
import { About } from "../Pages/About";
import { Dashboard } from "../Pages/Dashboard";
import { Settings } from "../Pages/Settings";
import { Profile } from "../Pages/Profile";
import { Login } from "../Pages/Login";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "../Pages/NotFound";
import { User } from "../Pages/User";
import { Layout } from "../Comp's/Layout";

export const AppRouting = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <Routes>
        
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        <Route
          path="/login"
          element={
            <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />

        <Route path="/user/:username" element={<User />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
