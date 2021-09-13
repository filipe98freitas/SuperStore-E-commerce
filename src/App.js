import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
