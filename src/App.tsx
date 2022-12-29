import React from "react";

import "./App.css";
import MiniNav from "./components/common/MiniNav";
import Navbar from "./components/common/Navbar";
import ReactRouters from "./ReactRouters";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <MiniNav />
        <Navbar />
        <ReactRouters />
      </RecoilRoot>
    </div>
  );
}

export default App;
