import React from 'react';

import './App.css';
import MiniNav from './components/common/MiniNav';
import Navbar from './components/common/Navbar';
import ReactRouters from './ReactRouters';

function App() {
  return (
    <div className="App">
      <MiniNav />
      <Navbar />
      <ReactRouters/>
    </div>
  );
}

export default App;
