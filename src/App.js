import logo from './logo.svg';
import './css/App.css';
import Header from "./components/Header"
import MainPanel from "./components/MainPanel"
import WebSocketComponent from "./components/WebSocketComponent"
// import PublishComponent from "./components/PublishComponent"
import SockJS from 'sockjs-client';
import { StompSessionProvider, useSubscription } from "react-stomp-hooks"


function App() {
  return (

    <div className="App">

      {/* <img src={logo} className="App-logo" alt="logo" />   means I enter js code  */}
      <Header />
      <MainPanel />
      <WebSocketComponent />

    </div>

  );
}

export default App;
