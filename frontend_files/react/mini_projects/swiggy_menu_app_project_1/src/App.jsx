import { useState } from 'react';
import {MenuDisplay} from './Menu_Display.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MenuDisplay/>
    </>
  )
}

export default App
