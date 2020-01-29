import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import data from "./router/router.config";//路由表信息
import Routeview from "./router/router";//路由逻辑

function App() {
  return (
    <BrowserRouter >
    <div className="App">
     <Routeview data={data}></Routeview>
    </div>
    </BrowserRouter>

  );
}

export default App;
