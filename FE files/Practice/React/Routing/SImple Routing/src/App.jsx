
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
  Link as Links,
  Outlet,
  NavLink,
  Navigate,
} from "react-router-dom";

function MainNavigation() {
  return (
    <nav>
      <Links to="/">Home</Links>
      <Links to="/kids-clothing">Kids Clothing</Links>
      <Links to="/mens-clothing">Men's Clothing</Links>
    </nav>
  );
}

// Router -> Routes -> Route
export default function App() {
  return (
    <>
      <MainNavigation />
    
        <Routes>
          <Route path="/" element={ <HomePage/> }  />
          <Route path="/kids-clothing" element={<KidsClothing/> }  />
          <Route path="/mens-clothing" element={<MensClothing/>}  />
        </Routes>
     
    
    </>
  );
}
