import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NotificationList } from './components/NotificationList '

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NotificationList/>
    </>
  )
}

export default App
