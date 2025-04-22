import logo from './logo.svg';
// imported logo from logo.svg
import './App.css';
// imports css file and applies styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* displays logo  */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {/* it can edit the code  */}
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
