import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
/*
BrowserRouter -> Enables routing in your React application.
Routes ->	Groups all your route definitions.
Route	-> Defines an individual route (URL + component).
*/
const App = () =>{
  return(
   <Router>
      <Routes>
          <Route path="/" element={<h1>Hello World</h1>}/>
          <Route path="/about" element={<h1>About Us</h1>}/>
      </Routes>
   </Router>
  )
}

export default App