import { createContext, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Footer } from './components/Footer'

export const ThemeContext=createContext({
  theme:'light',
  setTheme:()=> {},
});

function App() {
  const [theme,setTheme]=useState('light');

  const value =useMemo(()=> ({theme,setTheme}),[theme])


  return (
    <>
     <ThemeContext.Provider value={value}>
      <Navbar/>
      <Home/>
      <Footer/>
     </ThemeContext.Provider>
    </>
  )
}

export default App
