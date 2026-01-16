import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ToDo from "./Components/ToDo";
import LoginSignup from "./Components/LoginSignUp";


const App = () => {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/ToDo" element={<ToDo />} />
    <Route path="/LoginSignup" element={<LoginSignup />}/>
  </Routes>
  </BrowserRouter>
  </>;
};

export default App;
