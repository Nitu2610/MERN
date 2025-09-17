import "./App.css";
import { Navbar } from "./components/Navbar";
import { Main } from "./pages/Main";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <>
      <div style={{backgroundColor:'lightgray', padding:'50px'}}>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
