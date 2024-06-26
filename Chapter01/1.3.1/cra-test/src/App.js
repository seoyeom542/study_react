import logo from "./logo.svg";
import "./App.css";
import smallImag from "./small.png";
import bigImage from "./big.png";

function App() {
  return (
    <div className="App">
      <img src={bigImage} />
      <img src={smallImag} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
