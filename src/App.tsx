import { useSelector } from "react-redux";
import "./App.scss";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { AppState } from "./store/AppStore";

function App() {
  const title = useSelector((state: AppState) => state.title);
  
  return (
    <section className="m-0">
      <Header title={title} />
      <Home />
    </section>
  );
}

export default App;
