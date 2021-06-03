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

      <Catalog></Catalog>
      <hr></hr>

      <Footer></Footer>
    </div>
  );
}

export default App;