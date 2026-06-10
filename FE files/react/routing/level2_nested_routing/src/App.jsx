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

const dynamicCategories = [
  { id: "footwear", name: "Footwear" },
  { id: "accessories", name: "Accessories" },
];

{/** Using this component to not use Navlink at each step and add classname.  */ }
const ActiveNavLink = ({ to, children, }) => {
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "highlightNavClick" : "")}>{children}</NavLink>
  )
}

function MainNavigation() {
  return (
    <nav>
      <ActiveNavLink
        to="/"
        className={({ isActive }) => (isActive ? "highlightNavClick" : "")}
      >
        Home
      </ActiveNavLink>

      <ActiveNavLink to="kids-clothing" className={({ isActive }) => (isActive ? "highlightNavClick" : "")} >Kids Clothing</ActiveNavLink>

      <ActiveNavLink to="mens-clothing" className={({ isActive }) => (isActive ? "highlightNavClick" : "")}>Men's Clothing</ActiveNavLink>
      {dynamicCategories.map((item) => {
        return (
          <ActiveNavLink key={item.id} to={`/${item.id}`}>
            {item.name}
          </ActiveNavLink>
        );
      })}
    </nav>
  );
}

function KidsNavigation() {
  return (
    <nav>
      <ActiveNavLink to="boys-clothing">Boys' Clothing</ActiveNavLink>
      <ActiveNavLink to="girls-clothing">Girls' Clothing</ActiveNavLink>
      <ActiveNavLink to="baby-clothing">Baby Clothing</ActiveNavLink>
    </nav>
  );
}
const BoysNavigation = () => {
  return (
    <nav>
      <ActiveNavLink to="playwear">Playwear</ActiveNavLink>
      <ActiveNavLink to="outerwear">Outerwear</ActiveNavLink>
    </nav>
  );
};

const BabysNavigation = () => {
  return (
    <nav>
      <ActiveNavLink to="sleepwear">Sleepwear</ActiveNavLink>
    </nav>
  );
};

const KidsLayout = () => {
  return (
    <>
      <KidsNavigation />
      <Outlet />
    </>
  );
};
const BoysLayout = () => {
  return (
    <>
      <BoysNavigation />
      <Outlet />
    </>
  );
};

const BabysLayout = () => {
  return (
    <>
      <BabysNavigation />
      <Outlet />
    </>
  );
};

export default function App() {
  return (
    <Router>
      <MainNavigation />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="kids-clothing" element={<KidsLayout />}>
          <Route index element={<BoysClothing />} />
          <Route path="boys-clothing" element={<BoysLayout />}>
            <Route path="playwear" element={<Playwear />} />
            <Route path="outerwear" element={<Outerwear />} />
          </Route>

          <Route path="girls-clothing" element={<GirlsClothing />} />

          <Route path="baby-clothing" element={<BabysLayout />}>
            <Route index element={<BabyClothing />} />
            <Route path="sleepwear" element={<Sleepwear />} />
          </Route>
        </Route>

        <Route path="mens-clothing" element={<MensClothing />} />
        <Route path="footwear" element={<Footwear />} />
        <Route path="accessories" element={<Accessories />} />
      </Routes>
    </Router>
  );
}
