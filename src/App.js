import logo from "./logo.svg";
import "./App.css";
import FBlogin from "./components/FBlogin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FBlogin />
      </header>
    </div>
  );
}

export default App;
