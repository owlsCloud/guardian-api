import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Feed />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
