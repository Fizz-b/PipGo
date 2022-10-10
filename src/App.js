import React, { Suspense } from "react";

import "./App.css";
import { Footer,Header } from "./container";
import { BrowserRouter } from "react-router-dom";

import { HomeRoutes,AreaRoutes,HouseRoutes,ChatRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div>Loading ...</div>}>
        <HomeRoutes />
        <AreaRoutes />
        <HouseRoutes />
        <ChatRoutes />
      </Suspense>

      
    </BrowserRouter>
  );
}

export default App;
