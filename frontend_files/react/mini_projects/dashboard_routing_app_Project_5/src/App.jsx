import { useState } from 'react'
import './App.css'
import { AppRouting } from './Routers/AppRouting'
import { Navbar } from './Comp\'s/Navbar'
import { Layout } from './Comp\'s/Layout';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   console.log(isLoggedIn)

  return (
    <>

    <AppRouting isLoggedIn={isLoggedIn} setIsLoggedIn={ setIsLoggedIn} />
    </>
  )
}

export default App
