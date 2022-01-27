import './App.css';
import NavBar from './components/NavBar';
import Greeting from "./components/ItemListContainer";

function App() {
  return (
    <><div className="App">
      <h1> E-Commerce </h1>
    </div>
    <div>
      <h2>
          <NavBar />
      </h2>
      <h3> <Greeting/> </h3>
    </div></>
 );
}

export default App;
