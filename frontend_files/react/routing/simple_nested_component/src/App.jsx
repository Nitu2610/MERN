import React from "react";
import HomePage from "./pages/HomePage";
import Accessories from "./pages/Accessories";
import KidsClothing from "./pages/KidsClothing";
import BoysClothing from "./pages/BoysClothing";
import GirlsClothing from "./pages/GirlsClothing";
import BabyClothing from "./pages/BabyClothing";
import Outerwear from "./pages/Outerwear";
import Playwear from "./pages/Playwear";
import Sleepwear from "./pages/Sleepwear";
import Footwear from "./pages/Footwear";
import MensClothing from "./pages/MensClothing";
import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";
import WomensClothing from "./pages/WomensClothing";

const dynamicCategories = [
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

function MainNavigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/** 1st Here we add the title for the  parent element with its path */}
      <Link to="/kids-clothing">Kids Clothing</Link>

      <Link to="/mens-clothing">Men's Clothing</Link>
      <Link to="/womens-clothing">Women's Clothing</Link>
      {dynamicCategories.map((item) => {
        return (
          <Link key={item.id} to={`/${item.id}`}>
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

function KidsNavigation() {
  return (
    <nav>
      <NavLink
        to="boys-clothing"
        className={({ isActive }) => (isActive ? " highlightText" : "")}
      >
        Boys' Clothing
      </NavLink>
      <NavLink
        to="girls-clothing"
        className={({ isActive }) => (isActive ? " highlightText" : "")}
      >
        Girls' Clothing
      </NavLink>
      <NavLink
        to="baby-clothing"
        className={({ isActive }) => (isActive ? " highlightText" : "")}
      >
        Baby Clothing
      </NavLink>
    </nav>
  );
}

const KidsLayout = () => {
  return (
    <>
      {/**3Here we create the new sub navbar inside which child element are displayed. */}
      <KidsNavigation />{" "}
      {/** The kids navbar create a new navbar as we normally do and link it with route. */}
      <Outlet />{" "}
      {/** Outlet is a special element which we use to display the parent and child content its dynamic and no need to manually link it with any component. */}
    </>
  );
};

export default function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/** 2nd Here we link the path of parent with another layout which contain the child element like a nested array*/}
        <Route path="/kids-clothing" element={<KidsLayout />}>
          {/** Here the parenet route path is empty as it will take the parent path  to display the parent commponent but its child must have the path and its component */}
          <Route path="" element={<KidsClothing />} />
          <Route path="boys-clothing" element={<BoysClothing />} />
          <Route path="girls-clothing" element={<GirlsClothing />} />
          <Route path="baby-clothing" element={<BabyClothing />} />
        </Route>

        <Route path="/mens-clothing" element={<MensClothing />} />
        <Route path="/womens-clothing" element={<WomensClothing />} />
        <Route path="/footwear" element={<Footwear />} />
        <Route path="/accessories" element={<Accessories />} />
      </Routes>
    </Router>
  );
}
