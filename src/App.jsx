import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Registration from "./Component/Registration"


function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={ <Home/> }></Route>
        <Route path="/registration" element={  <Registration/>}></Route>
  
      </Routes>
  
    </>
  )
}

export default App
