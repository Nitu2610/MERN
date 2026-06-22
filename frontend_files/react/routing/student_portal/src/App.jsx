import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AppRouting } from './Comps/AppRouting'

function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
     <AppRouting isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}

export default App
