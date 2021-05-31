import React, { useState } from "react";
import "./App.scss";
import CountDisplay from "./count-display/CountDisplay";
import CountGraph from "./count-graph/CountGraph";
import CountInfo from "./count-info/CountInfo";
import Counter from "./counter/Counter";
import Header from "./header/Header";

function App() {
  const [state, setState] = useState({ 
    title: 'Best Buy', 
    count: 0, 
    allowedCapacity: .75, 
    totalCount: 28 
  });
  const onIncreaseCount = (e) => {
    setState(Object.assign({}, state, { count: state.count + 1 }));
  };
  const onDecreaseCount = (e) => {
    if (state.count > 0) {
      setState(Object.assign({}, state, { count: state.count - 1 }));
    }
  };
  return (
    <div className="App">
      <Header title={state.title} />
      <CountGraph count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity} />
      <CountDisplay count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity} />
      <Counter increaseCount={onIncreaseCount} decreaseCount={onDecreaseCount} />
      <CountInfo count={state.count} totalCount={state.totalCount} allowedCapacity={state.allowedCapacity}/>
    </div>
  );
}

export default App;
