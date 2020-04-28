import React from 'react';
import './App.css';

import AutoProgressBar from './components/AutoProgressBar';
import ManualProgressBar from './components/ManualProgressBar';

function App() {
  return (
    <div className="App">
      <AutoProgressBar />
      <ManualProgressBar />
    </div>
  );
}

export default App;
