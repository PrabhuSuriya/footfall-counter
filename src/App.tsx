import React from 'react';
import './App.scss';
import CountDisplay from './count-display/CountDisplay';
import Counter from './counter/Counter';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Header title="Target" />
      <CountDisplay count="234" />
      <Counter />
  
    </div>
  );
}

export default App;
