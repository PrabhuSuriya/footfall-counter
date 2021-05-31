import React, { useState } from "react";
import "./App.scss";
import CountDisplay from "./components/count-display/CountDisplay";
import CountGraph from "./components/count-graph/CountGraph";
import CountInfo from "./components/count-info/CountInfo";
import Counter from "./components/counter/Counter";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";

function App() {
  
  return (
    <section className="m-0">
      <Header title="Walmart" />
      <Home />
    </section>
  );
}

export default App;
