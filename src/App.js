import {BrowserRouter, Switch, Route} from "react-router-dom"
import Checkout from "./components/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/checkout" component={Checkout}/> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
