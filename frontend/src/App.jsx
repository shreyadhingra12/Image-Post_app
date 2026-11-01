import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import CreatePost from "./pages/CreatePost";
/*
BrowserRouter -> Enables routing in your React application.
Routes ->	Groups all your route definitions.
Route	-> Defines an individual route (URL + component).
*/
const App = () =>{
  return(
   <Router>
      <Routes>
          <Route path="/create-post" element={<CreatePost/>}/>
          <Route path="/about" element={<h1>About Us</h1>}/>
      </Routes>
   </Router>
  )
}

export default App