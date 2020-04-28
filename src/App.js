import React from 'react';
import './App.css';

import AutoProgressBar from './components/AutoProgressBar';
import ManualProgressBar from './components/ManualProgressBar';
import MenuProgressBar from './components/MenuProgressBar';

function App() {
  return (
    <div className="App">
      <AutoProgressBar />
      <ManualProgressBar />
      <MenuProgressBar />
    </div>
  );
}

export default App;
