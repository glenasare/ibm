import React from "react";
import MiniNav from "./components/common/MiniNav";
import Navbar from "./components/common/Navbar";
import Events from "./components/Events/Events";
import Home from "./components/Home/Home";

function ReactRouters() {
  return (
    <div>
      <Home/>
      <Events/>
    </div>
  );
}

export default ReactRouters;
