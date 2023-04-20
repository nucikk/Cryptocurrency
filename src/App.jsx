import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Registration from "./Component/Registration"
import Login from "./Component/Login"


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/registration" element={  <Registration/>}></Route>
        <Route path="/login" element={  <Login/>}></Route>
      </Routes>
  
    </>
  )
}

export default App
