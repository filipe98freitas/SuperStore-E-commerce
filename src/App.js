import { BrowserRouter, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Home from "./components/Home";
import ManagerProducts from "./components/ManagerProducts";
import Footer from "./components/Footer";
import FakeAutentication from "./components/FakeAutentication"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/fakeautentication" component={FakeAutentication} />
        <Route exact path="/restricted" component={ManagerProducts} />
        <Route exact path="/checkout" component={Checkout} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
