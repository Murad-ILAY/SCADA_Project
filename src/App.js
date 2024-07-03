import logo from './logo.svg';
import './css/App.css';
import Header from "./components/Header"
import MainPanel from "./components/MainPanel"


function App() {
  return (
    <div className="App">
      {/* <img src={logo} className="App-logo" alt="logo" />   means I enter js code  */}
      <Header />
      
      <MainPanel />

    </div>
  );
}

export default App;
