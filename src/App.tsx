import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { AppState } from "./store/AppStore";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Settings from "./pages/settings/Settings";

function App() {
  const title = useSelector((state: AppState) => state.title);

  return (
    <section className="m-0">
      <Router>
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
      </Router>
    </section>
  );
}

export default App;
