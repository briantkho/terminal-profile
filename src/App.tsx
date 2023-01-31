import React from 'react';
import './App.css';
import { Background } from './components/Background';
import { Terminal } from './Terminal';

function App() {
  return (
    <div className="w-screen h-screen font-mono caret-white">
      <Terminal />
      <Background />
    </div>
  );
}

export default App;
