import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { AppState } from "./store/AppStore";
import {
  BrowserRouter,
  Route,
  Redirect,
} from "react-router-dom";
import Settings from "./pages/settings/Settings";

function App() {
  const title = useSelector((state: AppState) => state.title);

  return (
    <section className="m-0">
      <Header title={title} />
      <BrowserRouter>
        <Route path="/home" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>      
      </BrowserRouter>
    </section>
  );
}

export default App;
