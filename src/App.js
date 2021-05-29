import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello from React!</h1>

      <Catalog></Catalog>

      <Footer></Footer>
    </div>
  );
}

export default App;