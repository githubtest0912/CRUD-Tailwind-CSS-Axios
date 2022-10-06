import React from "react";

import Register from "./Register";
import Login from './Login'
import { Routes, Route } from "react-router-dom";

const MainIndex = () => {
  return (
    <div>
      
      <Routes>
        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />} />
      </Routes>
    </div>
  );
};

export default MainIndex;
