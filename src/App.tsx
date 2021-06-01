import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import { AppState } from "./store/AppStore";
import "./App.scss";

// import Home from "./pages/home/Home";
// import Settings from "./pages/settings/Settings";

const Home = lazy(() => import("./pages/home/Home"));
const Settings = lazy(() => import("./pages/settings/Settings"));

function App() {
  const title = useSelector((state: AppState) => state.title);

  return (
    <section className="m-0">
      <Router>
        <Suspense fallback={<div className="is-size-1 has-text-primary has-text-centered mt-6"> <i className="fas fa-spinner fa-pulse"></i> </div>}>
          {/*...*/}
          <Header title={title} />
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </section>
  );
}

export default App;
