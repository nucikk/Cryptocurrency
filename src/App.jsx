import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Registration from "./Component/Registration"
import Login from "./Component/Login"
import Content from "./Component/Content"


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/registration" element={  <Registration/>}></Route>
        <Route path="/login" element={  <Login/>}></Route>
        <Route path="/content" element={  <Content/>}></Route>
      </Routes>
  
    </>
  )
}

export default App
