import React from "react";
import {Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage/StartPage";
import GamePage from "./Components/GamePage/GamePage";
import FinalPage from "./Components/FinalPage/FinalPage";

function App() {
  return (
    <Routes>
    <Route  path='/' element={ <StartPage/>}/> 
     <Route  path='/GamePage'element={<GamePage/>}/>
     <Route  path='/FinalPage'  element={<FinalPage/>}/>  
  </Routes>
  
  );
}

export default App;
