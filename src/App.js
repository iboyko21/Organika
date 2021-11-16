import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.css";

import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Catalog from "./components/catalog";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Admin from './components/admin';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>

        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/cart" exact component={Cart}></Route>
        </Switch>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
