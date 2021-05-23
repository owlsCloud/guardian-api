import "./App.css";
import News from "./pages/News";
import Opinion from "./pages/Opinion";
import Sport from "./pages/Sport";
import Header from "./components/Header";
import Culture from "./pages/Culture";
import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <News />
        </Route>
        <Route path="/opinion" exact>
          <Opinion />
        </Route>
        <Route path="/sport" exact>
          <Sport />
        </Route>
        <Route path="/culture" exact>
          <Culture />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
