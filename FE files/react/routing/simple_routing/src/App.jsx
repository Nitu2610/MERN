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
import WomensClothing from "./pages/WomensClothing";

import "./styles.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as Links,
  Outlet,
  NavLink,
  Navigate,
  Link,
} from "react-router-dom";

const routingDetails = [
  { no: 1, to: "/", heading: "Home", element: HomePage },
  {
    no: 2,
    to: "/mens-clothing",
    heading: "Men's Clothing",
    element: MensClothing,
  },
  {
    no: 3,
    to: "/women-mens-clothing",
    heading: "Women's Clothing ",
    element: WomensClothing,
  },
  {
    no: 4,
    to: "/kids-clothing",
    heading: "Kids Clothing",
    element: KidsClothing,
  },
  {
    no: 5,
    to: "/Baby-clothing",
    heading: "Baby Clothing",
    element: BabyClothing,
  },
  { no: 6, to: "/outwear", heading: "Outrwear", element: Outerwear },
  { no: 7, to: "/footwear", heading: "Footwear", element: Footwear },
  { no: 8, to: "/accessories", heading: "Accessories", element: Accessories },
];


document.title="Simple Routing Page"
function MainNavigation() {
  return (
    <nav>
      {/* Manually creating the Link element.
       <Links to="/">Home</Links>
      <Links to="/kids-clothing">Kids Clothing</Links>
      <Links to="/mens-clothing">Men's Clothing</Links> */}

      {/* Dynamic Nav bar detaila */}
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {/* the Link usage */}
        {/**
   *   {routingDetails.map((e,i)=>{
        let {no, to, heading}=e;
        return <li key={no} style={{listStyle:'none'}}> <Link to={to}> {heading}</Link> </li>
      })}
   */}

        {/** NavLink=> Advance version of Link, helps to highlight the acitve page with the help of inbuild object(inActive) */}

        {routingDetails.map((e, i) => {
          let { no, to, heading } = e;
          return (
            <li key={no} style={{ listStyle: "none" }}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? "active-navLink" : "")}
              >
                {" "}
                {heading}
              </NavLink>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Router -> Routes -> Route
export default function App() {
  return (
    <>
      <MainNavigation />

      <Routes>
        {/** Manually adding the Route */}

        {/**
         *   <Route path="/" element={<HomePage/>} />
          <Route path="/kids-clothing" element={<KidsClothing/>} />
          <Route path="/mens-clothing" element={<MensClothing/>} />
         */}

        {/** The Dynamically creating the Route and updating the vaues */}

        {routingDetails.map((e, i) => {
          let { to, element: Element } = e;
          return <Route path={to} element={<Element />} />;
        })}
      </Routes>
    </>
  );
}
