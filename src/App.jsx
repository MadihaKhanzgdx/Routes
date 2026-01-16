import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ToDo from "./Components/ToDo";
import LoginSignup from "./Components/LoginSignUp";


const App = () => {
  return <>
  <HashRouter>
  <Routes>
    <Route path="/ToDo" element={<ToDo />} />
    <Route path="/LoginSignup" element={<LoginSignup />}/>
  </Routes>
  </HashRouter>
  </>;
};

export default App;
