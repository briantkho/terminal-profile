import React from 'react';
import './App.css';
import { Terminal } from './Terminal';

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-lightBlue to-darkBlue flex items-center justify-center font-mono">
      <Terminal />
    </div>
  );
}

export default App;
