import logo from './logo.svg';
import './App.css';
import FirstComponent from "./components/FirstComponent";
import AnotherComponent from "./components/AnotherComponent";
import imagens from "/components/imagens";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <FirstComponent/>
      <AnotherComponent/>
      <imagens/>
    </div>
  );
}

export default App;
