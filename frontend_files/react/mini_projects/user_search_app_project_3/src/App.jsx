
import { useState } from 'react'
import './App.css'
import { FetchUsers } from './components/FetchUsers'
import { SearchBox } from './components/SearchBox'
import { DisplayUsers } from './components/DisplayUsers';

function App() {
let [dataCheck, setDataCheck] = useState(false);
 const [name,setName]=useState("");
let [userData,setUserData]=useState([]);

  return (
    <>
      <h1> The React App </h1>
      <SearchBox dataStatus={dataCheck} name={name} setName={setName} />
      <FetchUsers setDataCheck={setDataCheck}  dataCheck={dataCheck} sendUserData={setUserData} />
      <DisplayUsers userDataSet={userData} filterUserName={name} />
    </>
  )
}

export default App
